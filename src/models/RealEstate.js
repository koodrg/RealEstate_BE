const mongoose = require('mongoose')
const RealEstateCategory = require('./Categories')
const Utility = require('./Utilities')
const User = require('./User')
const mongoosastic = require('mongoosastic');
//const elasticsearch = require('elasticsearch');

//const esClient = new elasticsearch.Client({host: 'localhost:9200'});

const RealEstateSchema = mongoose.Schema(
    {
        _id: {
            type: mongoose.SchemaTypes.ObjectId,
        },
        id_category:{
            type: mongoose.SchemaTypes.ObjectId,
            ref: RealEstateCategory,
        },
        name:{
            type: String,
            required: true
        },
        area :{
            type: String,
            required: true
        },
        area_by_num:{
            type: Number,
            require:true
        },
        direction: {
            type: String
        },
        num_bedroom: {
            type: Number,
        },
        num_wc: {
            type: Number,
        },
        full_address:{
            type: String,
            required: true
        },
        detail_address: {
            ward: {
                type: String,
                required: true
            },
            district: {
                type: String,
                required: true
            },
            city: {
                type: String,
                required: true
            }
        },
        price: {
            type: String,
            required: true
        },
        price_by_num:{
            type: Number,
            require: true,
        },
        more_description: {
            type: String,
            //required: true
        },
        imgList: [{
            type: String,
            require: true
        }],
        utilsList: [{
            type: mongoose.SchemaTypes.ObjectId,
            ref: Utility,
        }],
        isConfirmed: {
            type: Boolean,
            required: true
        },
        postedBy: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: User,
        },

    },
    {
        timestamps: {
            createdAt: "created_date",
            updatedAt: "updated_date",
        },
    }
)

module.exports = mongoose.model('realEstate', RealEstateSchema)