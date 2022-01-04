const cloudinary = require("../../utils/cloudinary");
const fs = require('fs')

const uploadToCloudinary = async (req, res) => {
    // filePathOnCloudinary: path of image we want
    // to set when it is uploaded to cloudinary
    var filePathOnCloudinary = "batdongsan/" + Date.now() + "-" + req.file.originalname;
    console.log(req.file)
    return cloudinary.uploader
        .upload(req.file.path, { public_id: filePathOnCloudinary })
        .then((result) => {
            fs.unlinkSync(req.file.path);
            res.status(200).send({
                message: "Success",
                url: result.url,
            });
        })
        .catch((error) => {
            fs.unlinkSync(req.file.path);
            res.status(400).send({ message: error });
        });
}

module.exports = uploadToCloudinary;