const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    first_name:{
        type:String,
        require:true
    },
    last_name:{
        type:String,
        required:true,
        unique:true
    },
    nick_name:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
    },
    gender:{
        type:String,
        enum:['M','F','O']
    },
    post_create:{
        type:String
    },
    profile_photo:{
        type:String,
    },
    biography:{
        type:String
    },
    followers:{
        type: [Schema.Types.ObjectId],
        ref:'users'
    },
    follow:{
        type:[Schema.Types.ObjectId],
        ref:'users'
    },
    is_active:{
        type:Boolean,
        default:true
    }
})

module.exports= mongoose.model('users',UserSchema)