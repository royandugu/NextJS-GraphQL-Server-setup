import { hello, publishNovel, viewNovels, viewIndvNovels, updateNovel,deleteNovel } from "./novelResolvers";

const resolvers = {
    Query: {
        hello: hello,
        viewNovels:viewNovels,
        viewIndvNovels:viewIndvNovels
    },
    Mutation: {
        publishNovel: publishNovel,
        updateNovel:updateNovel,
        deleteNovel:deleteNovel
    }
}

export default resolvers;