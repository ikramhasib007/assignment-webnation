module.exports = {
  client: {
    clientOnlyDirectives: ["connection", "type"],
    clientSchemaDirectives: ["client", "rest"],
    service: {
      name: 'assignment-webnation',
      url: 'http://localhost:3000/api/graphql'
    },
    includes: ["./src/**/*.{ts,js,tsx}"],
  }
};
