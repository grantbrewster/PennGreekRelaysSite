const express = require('express');
const cors = require('cors');
// connect to mongodb database
const mongoose = require('mongoose');

require('dotenv').config();

// express server
const app = express();
const port = process.env.PORT || 5000;

// parse json send and receive json
app.use(cors());
app.use(express.json());

const uri = process.env.DB_URI;

// new parser for mongo db uri, deal with update
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

// require files and then use files
const usersRouter = require('./routes/users');

app.use('/users', usersRouter);

// starts the server
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
