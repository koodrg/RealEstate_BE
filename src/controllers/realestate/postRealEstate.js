const { RealEstate } = require('../../models');

const postRealEstate = async (req, res, next) => {
  try{
    if(!req.body.imagesUrl){
      res.status(400).send('No images attach!')
    }
    const realEstate = new RealEstate({
        utilsList: [],
        id_category: req.body.id_category,
        name: req.body.name,
        area: req.body.area,
        area_by_num: req.body.area_by_num,
        direction: req.body.direction,
        num_bedroom: req.body.num_bedroom,
        num_wc: req.body.num_wc,
        full_address: req.body.full_address,
        detail_address: req.body.detail_address,
        price: req.body.price,
        price_by_num: req.body.price_by_num,
        more_description: req.body.more_description,
        isConfirmed: false,
        postedBy: req.user._id,
        legal: req.body.legal,
        imgList: req.body.imagesUrl
    });
    const saveRealEstate = await realEstate.save();
    res.status(200).json(saveRealEstate);
  }
  catch (err) {
    res.status(404).json({ message: err });
  }
};

module.exports = postRealEstate;