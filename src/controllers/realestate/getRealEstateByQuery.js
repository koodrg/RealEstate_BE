
const { RealEstate } = require("../../models");

const {response} = require('express');

const getRealEstateByQuery = (req, res, next) => {
    let { q, category, price_max, price_min } = req.query;
    console.log(req.query);
  
    console.log(q, category, price_max, price_min)
    
    if(q==='null'){
      //console.log('q null')
      RealEstate.esSearch(
        {
          query: {
            bool: {
              must: [
                {
                  range: {
                    price_by_num: {
                      gte: price_min,
                      lte: price_max,
                    },
                  },
                },
                { match: { id_category: category } },
              ],
            },
          },
        },
        {
          size: 60,
          from: 0,
        },
        (err, result) => {
          if (err) return next(err);
          var data = result.hits.hits.map((hit) => {
            hit._source._id = hit._id;
            return hit;
          });
          response.data = data;
          res.status(200).json(response);
        }
      );
      return;
    }
    if(q.length > 0) {
      //console.log('q not null')
      RealEstate.esSearch(
        {
          query: {
            bool: {
              must: [
                {
                  range: {
                    price_by_num: {
                      gte: price_min,
                      lte: price_max,
                    },
                  },
                },
                { match: { full_address: q}},
                { match: { id_category: category } },
              ],
            },
          },
        },
        {
          size: 60,
          from: 0,
        },
        (err, result) => {
          if (err) return next(err);
          var data = result.hits.hits.map((hit) => {
            hit._source._id = hit._id;
            return hit;
          });
          response.data = data;
          res.status(200).json(response);
        }
      );
    }
}

module.exports = getRealEstateByQuery;