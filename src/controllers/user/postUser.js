const { User } = require("../../models");

const postUser = async (req, res) => {
  const user = new User({
    email: req.body.email,
    name: req.body.name,
    password: req.body.password,
    listRealEstate: [],
  });
  try {
    const saveUser = await User.save();
    res.status(200).json(saveUser);
  } catch (err) {
    res.status(404).json({ message: err });
  }
};

module.exports = postUser;