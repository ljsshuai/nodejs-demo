var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var collectionName = "article_table";

var schema = new Schema(
    {
        title:{type:String},//积分
        sub_title: {type:String},
        src:{type:String}
    },
    {
        collection: collectionName
    }
);
module.exports = mongoose.model(collectionName,schema);






