const mongoose = require('mongoose');
const { ApolloServer } = require('apollo-server');
const { importSchema } = require('graphql-import');

const resolvers = require('./resolvers')
const typeDefs = importSchema(__dirname + '/schema.graphql');   

const MONGO_URI =
  'mongodb+srv://donas:TJi5dJrlTk4wFbcW@cluster0-kiojd.mongodb.net';

mongoose.connect(MONGO_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

const mongo = mongoose.connection;

mongo
	.on('error', error => console.log(error))
	.once('open', () => console.log('Connected to database'));

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
	console.log(`Server starts in : ${url}`);
});