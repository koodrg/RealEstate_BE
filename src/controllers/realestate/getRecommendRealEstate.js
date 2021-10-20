const { RealEstate } = require("../../models");

const getRecommendRealEstate = (req, res, next) => {
    RealEstate.esSearch(
      {
        query: {
          bool: {
            must: [{
                
                multi_match: {
                    query: req.params.q,
                    fields: ["full_address", "description"],
                },
            },{
                match: {"id_category": req.params.category },
            }
            ],

            filter: {
              range: {
                price_by_num: {
                  gte: req.params.price_min,
                  lte: req.params.price_max,
                },
              },
            },
          },
        },
      },
      {
        size: 4,
        from: 1,
      },
      (err, result) => {
        if (err) return next(err);
        var recommendList = result.hits.hits.map((hit) => {
          return hit;
        });
        const data = recommendList.filter(
          (rec) => rec._source.price_by_num != req.params.price_by_num
        );

        res.status(200).json({ data: data });
      }
    );
  };

module.exports = getRecommendRealEstate;