const { Rating } = require("../../models");
// const {spawn} = require('child_process');
const { PythonShell } = require("python-shell");
const fs = require('fs');
const { RealEstate } = require("../../models");
const { Tasks } = require("elasticsearch");


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
    
    let pyshell = new PythonShell('./src/controllers/realestate/recommend.py', { mode: 'text' });

    // sends a message to the Python script via stdin
    pyshell.send(JSON.stringify(result))
    pyshell.send(JSON.stringify(req.params.userId))


    pyshell.on('message', async function (message) {
      // received a message sent from the Python script (a simple "print" statement)
      try{
        // const data = JSON.parse(message.toString())
        var data = message.toString().replace('[','').replace(']','')
        data = data.split("'").join('').split(", ")
        
        const promises = await data.map(async(re) => {
          let realEstate = await GetOneRealEstate(re)
          return realEstate
        });
        const response = await Promise.all(promises)
        res.status(200).send({data: response})
      }
      catch(err){
        console.log(err);
      }
    });
  
    // end the input stream and allow the process to exit
    pyshell.end(function (err) {
      if (err){
          console.log(err);
      };
      console.log('finished');
    });
    console.log('done end pyshell')

    //fs.writeFileSync('./ratings.json', JSON.stringify(result, null, 10)); 
    
    //res.status(200).send('success'); 
  }
  catch(err){
    throw err;
  }
}

const GetOneRealEstate = async (id) => {
  try{
    const re = await RealEstate.findById(id)
    return re
  }
  catch(err){
    console.log(err);
  }
 
}

module.exports = getAllRecommend;