const jwt = require('jsonwebtoken');
const { getUserByID } = require('../services/UserService');

module.exports = async(request) => {
	const Authorization = request.get('Authorization');
	if(Authorization){
		const formatedToken = Authorization.replace('JWT ','');
		const payload = jwt.verify(formatedToken,SECRET);
		if(!payload) return request;
		const user = await getUserByID(payload.id);
		if(!user) return request;
		return {...request,user};
	}else{
		return request;
	}
};