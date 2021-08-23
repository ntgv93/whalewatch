const express = require('express');
const path = require('path');
const app = express();
const {graphqlHTTP} = require('express-graphql');
const PORT = 3000;
//make sure to import schema 
const schema = require('./db/schema.js');

//need cors to connect our front end + back
app.use(express.json());
app.use(express.static('build'));


//use our graphql middleware. only to one endpoint
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql:true
}))


//allow access to our index.html folder
app.use('/', express.static(path.join(__dirname, '../client')));

//serve the index file 
if (process.env.NODE_ENV === 'production') {
  //allow access to our index.html folder
  app.use('/build', express.static(path.join(__dirname, '../build')));
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
  console.log('This is __dirname', __dirname)
})

module.exports = app;