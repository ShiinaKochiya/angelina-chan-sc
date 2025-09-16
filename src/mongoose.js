const dotenv = require("dotenv")

dotenv.config();

const mongoose = require("mongoose")

const mongoUrl = process.env.DB_URL

mongoose
  .connect(mongoUrl)
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((err) =>
    console.error('Error connecting to MongoDB Atlas', err)
  );

module.exports = { mongoose };