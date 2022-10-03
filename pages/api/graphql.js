import { createServer } from '@graphql-yoga/node'
const API_URL = "https://jsonplaceholder.typicode.com/users"

const typeDefs = /* GraphQL */ `
  type Query {
    users: [User!]!
  }
  type User {
    id: ID!
    name: String!
    email: String!
    phone: String!
  }
`

const resolvers = {
  Query: {
    async users(parent, args, ctx, info) {
      try {
        const res = await fetch(API_URL)
        if(res.status !== 200) throw new Error('Something went wrong!')
        const users = await res.json()
        return users
      } catch (error) {
        throw new Error(error)
      }
    },
  },
}

const server = createServer({
  schema: {
    typeDefs,
    resolvers,
  },
  endpoint: '/api/graphql',
  // graphiql: false // uncomment to disable GraphiQL
})

export default server