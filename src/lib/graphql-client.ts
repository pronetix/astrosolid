import { GraphQLClient } from 'graphql-request';

const graphqlClient = (preview = false) =>  
  new GraphQLClient(import.meta.env.STRAPI_ENDPOINT || '')
export { graphqlClient }