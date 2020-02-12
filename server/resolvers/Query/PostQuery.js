 
const PostServices = require('../../services/PostService');


const allPosts = (root,args,context) => {
	return PostServices.getPosts();
};

const getPost = (root,args,context) => {
	return PostServices.getEventByID(args.id);
};


module.exports = {
	allPosts,
	getPost
};