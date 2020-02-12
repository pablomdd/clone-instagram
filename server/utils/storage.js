const cloudinary = require('cloudinary');

const storage = ({ stream }) => {

	cloudinary.config({
		cloud_name:'dhmt5orc8',
		api_key:'464584874979678',
		api_secret:'BnRN3TFeO1rIxwuFKiy9L7rxhLk'
	});

	return new Promise((resolve,reject) => {
		const buffer = cloudinary.v2.uploader.upload_stream((err,result) => {
			if(err) reject(err);
			resolve(result);
		});//chunks

		stream.pipe(buffer);

	});

};

module.exports = storage;