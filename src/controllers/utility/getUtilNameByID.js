const { modelName } = require('../../models/Utilities');
const Utilities = require('../../models/Utilities')

const getUtilNameByID = async(req,res) =>  {
    try {
        await Utilities.findById(req.params.id, function (err, util) {
            if (err)
                return console.log(err);
            console.log(util.name);
            res.status(200).json({name: util.name});
          });
        } catch (err) {
        res.status(404).json({ message: err });
      }
}

module.exports = getUtilNameByID;