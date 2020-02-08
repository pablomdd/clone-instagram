const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    photo:{
        type:String
    },
    description:{
        type:String,

    },
    comments:{
        type:String
    },
    likes:{
        type:[User]
    },
    date:{
        type: Date
    }


})

module.exports = mongoose.model('Posts',PostSchema);