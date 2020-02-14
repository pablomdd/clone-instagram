const PostServices = require('../../services/PostService');
const UserServices = require('../../services/UserService');

const createPost = async(root,args,context) => {
	// args.created_by = context.user._id;
	const post = await PostServices.createPost(args.data);
	console.log(post);
	// await UserServices.addCreatedPost(args.data.created_by, post._id);
	return post;
};



const updatePost = async(root,args,context) => {
	const post = await PostServices.getPostByID(args.id);
	if(context.user._id === post.created_by){
		const newPost = await PostServices.updatePost(args.id,args.data);
		return newPost;
	}else{
		throw Error('You can not edit this post');
	}
};

const deletePost = async(root,args,context) => {
	const post = await PostServices.getPostByID(args.id);
	if(context.user._id === post.created_by){
		await PostServices.deletePost(args.id);
		return {code:204,message:'Post deleted successfully'};
	}else{
		throw Error('You can not delete this post');
	}
};

module.exports = {
	createPost,
	updatePost,
	deletePost
};