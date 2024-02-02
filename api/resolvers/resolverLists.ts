import { hello, publishNovel, viewNovels, viewIndvNovels, updateNovel,deleteNovel } from "./novelResolvers";

const resolvers = {
    Query: {
        hello: hello
    },
    Mutation: {
        publishNovel: publishNovel,
        viewNovels:viewNovels,
        viewIndvNovels:viewIndvNovels,
        updateNovel:updateNovel,
        deleteNovel:deleteNovel
    }
}

export default resolvers;