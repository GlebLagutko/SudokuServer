import apollo from 'apollo-server'


const {gql} = apollo;

export const typeDefs = gql`
    #comment 
    type User{
        name:String!
        results:[Int!]
    }

    type Query{
        users:[User]
    }


`;









