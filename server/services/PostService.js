const Post = require('../models/Posts');

const createPost = (post) => {
	return Post.create(post);
};

const getPosts = () => {
	return Post.find({is_active:true}).populate('created_by').exec();
};

const getPostByID = (_id) => {
	return Post.findOne({_id}).exec();
};

const updatePost = (_id,data) => {
	return Post.findOneAndUpdate({_id},{$set:{...data}},{new:true}).exec();
};

const deletePost = (_id) => {
	return Post.findOneAndUpdate({_id},{$set:{is_active:false}},{new:true}).exec();
};


module.exports = {
	createPost,
	getPosts,
	getPostByID,
	updatePost,
	deletePost,
};