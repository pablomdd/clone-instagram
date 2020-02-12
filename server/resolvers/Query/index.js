const UserQuery = require('./UserQuery');
const PostQuery =  require('./PostQuery');

module.exports = {
	...UserQuery,
	...PostQuery
};