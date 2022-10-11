const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const resolvers = require('./resolvers');
const schema = require('./schema');

const port = process.env.PORT || 9000;
const app = express();

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: resolvers.root,
  graphiql: true
}))

app.listen(
   port, () => console.info(
      `Server started on port ${port}`
   )
);