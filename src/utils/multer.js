const multer = require("multer");
const storage = multer.diskStorage({});
  
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, file.fieldname + "-" + Date.now());
  } else {
    cb("invalid image file!", false);
  }
};
  
const upload = multer({ storage, fileFilter });

module.exports = upload;