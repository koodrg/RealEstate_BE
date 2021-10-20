const { RealEstate } = require('../../models');

const postRealEstate = async (req, res) => {

  const realEstate = new RealEstate({
      imgList,
      utilsList,
      id_category,
      name,
      area,
      area_by_num,
      direction,
      num_bedroom,
      num_wc,
      full_address,
      detail_address,
      price,
      price_by_num,
      more_description,
      isConfirmed: false,
      postedBy,
      legal
  });
  try {
    const saveRealEstate = await realEstate.save();
    res.status(200).json(saveRealEstate);
  } catch (err) {
    res.status(404).json({ message: err });
  }
};

module.exports = postRealEstate;