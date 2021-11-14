const { Rating } = require("../../models");
// const {spawn} = require('child_process');
const { PythonShell } = require("python-shell");


const getAllRecommend = async function (req, res) {
  try{
    const result = await Rating.find({});
    res.set({
      "Access-Control-Allow-Credentials": "true",
      "Access-Control-Allow-Methods": "GET, POST,   ",
      "Access-Control-Allow-Headers": "Origin, Content-Type, Accept",
      "Access-Control-Allow-Origin": "*",
    });   
    //run python script 
    
    let pyshell = new PythonShell('./src/controllers/realestate/recommend.py', { mode: 'json' });

    // sends a message to the Python script via stdin
    pyshell.send(JSON.stringify(result))
    pyshell.send(JSON.stringify(req.params.userId))


    pyshell.on('message', function (message) {
      // received a message sent from the Python script (a simple "print" statement)
      console.log(message);
    });
  
    // end the input stream and allow the process to exit
    pyshell.end(function (err) {
      if (err){
          throw err;
      };
      console.log('finished');
    });
    console.log('done end pyshell')
    
    res.status(200).send('success'); 
  }
  catch(err){
    console.log(err);
  }
}

/**************************************** */
    // var python = spawn('python', ['recommend.py'], { stdio: 'pipe'});

    // const buffers = [];

    // python.stdout.on('data', (chunk) => buffers.push(chunk));
    // python.stdout.on('end', () => {
    //     const result = JSON.parse(Buffer.concat(buffers));
    //     console.log('Python process exited, result:', result);
    // });

    // python.stdin.write(JSON.stringify(result));
    // python.stdin.end()  
/********************************************** */

module.exports = getAllRecommend;