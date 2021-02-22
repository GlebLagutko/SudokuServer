import {typeDefs} from "./schema/index.js";
import {resolvers} from "./resolver/index.js";

import apollo from 'apollo-server'

const {ApolloServer} = apollo;

const server = new ApolloServer({typeDefs, resolvers});

// The `listen` method launches a web server.
server.listen().then(({url}) => {
    console.log(`🚀  Server ready at ${url}`);
});