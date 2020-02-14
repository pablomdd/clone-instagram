
const mongoose = require('mongoose');
const { ApolloServer } = require('apollo-server');
const { importSchema } = require('graphql-import');
const { makeExecutableSchema } = require( 'graphql-tools');
const resolvers =  require('./resolvers');
const verifyToken = require ('./utils/verifyToken');
const AuthDirective = require('./resolvers/Directives/AuthDirective');


async function start(){

	const typeDefs = await importSchema(__dirname +  '/schema.graphql');

	const MONGO_URI =
  'mongodb+srv://donas:TJi5dJrlTk4wFbcW@cluster0-kiojd.mongodb.net';

mongoose.connect(MONGO_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

const mongo = mongoose.connection;

const cors = {
	origin: process.env.WHITELIST
};

mongo
	.on('error', error => console.log(error))
	.once('open', () => console.log('Connected to database'));


const schema = makeExecutableSchema({
	typeDefs,
	resolvers,
	schemaDirectives:{
		auth:AuthDirective
	}
});


const server = new ApolloServer({ 
	schema,
	cors,
	context: ({req}) => verifyToken(req)
});

server.listen().then(({ url }) => {
	console.log(`Server starts in : ${url}`);
});


}


start();


// const schema = {
//     resolvers,
//     typeDefs
// }

