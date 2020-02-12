const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const EventSchema  = new Schema({
	photo:{
		type:String,
		required:true
	},
	title :{
		type:String,
		required:true
	},
	description :{
		type:String,
		required:true,
	},
	date :Date,
	comments:{
		type: String
	},
	likes:{
		type:[String]
	},
	is_active:{
		type: Boolean,
		default: true
	}

},{timestamps:true} );

module.exports = mongoose.model('posts',EventSchema);

