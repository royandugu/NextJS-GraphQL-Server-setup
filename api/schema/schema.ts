import { gql } from 'graphql-tag';

const typeDefs = gql`
    type Novel{
        _id:ID!
        title:String
        author:String
        createdAt:String
        updatedAt:String
    }
    type Query{
        hello:String 
    }
    type Mutation {
        publishNovel(title: String!, author: String!): Novel
        viewNovels:[Novel]
        viewIndvNovels(id:String!):Novel
        updateNovel(id:String!, title:String!, author:String!):Novel
        deleteNovel(id:String!):Novel
    }
`;

export default typeDefs;