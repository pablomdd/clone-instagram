const PostServices = require('../../services/PostService');
const UserServices = require('../../services/UserService');

const createPost = async(root,args,context) => {
	args.created_by = context.user._id;
	const post = await PostServices.createPost(args.data);
	await UserServices.addCreatedPost(context.user._id, post._id);
	return post;
};



const updatePost = async(root,args,context) => {
	const PostService = await PostServices.getPostByID(args.id);
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

const joinPost = async(root,args,context) => {
	await PostServices.addUserToPost(args.id,context.user.id);
	await UserServices.addPostToUser(context.user._id,args.id);
	return{code:200,message:'Joined Post successfully'};
}; 

const leavePost = async(root,args,context) => {
	await PostServices.removeUserFromPost(root,args,context);
	await UserServices.removePostFromUser(context.user._id,args.id);
	return {code:200,message:'Removed Post successfully'};
};

module.exports = {
	createPost,
	updatePost,
	joinPost,
	deletePost
};