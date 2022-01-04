const { RealEstate } = require('../../models');

const postRealEstate = async (req, res, next) => {
  try{
    console.log(req.body)
    if(!req.body.imagesUrl){
      res.status(400).send('No images attach!')
    }
    const newRealEstate = new RealEstate({
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
        legal: '',
        imgList: req.body.imagesUrl
    });
    const saveRealEstate = await newRealEstate.save();
    console.log(saveRealEstate)
    res.status(200).json(saveRealEstate);
  }
  catch (err) {
    console.log(err)
  }
};

module.exports = postRealEstate;