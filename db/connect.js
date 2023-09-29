const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();



function connectDB() {
  
    mongoose
      .connect(process.env.DB_LINK)
      .then(() => console.log("DB_CONNECTED"))
      .catch((err) => console.log(`Error: ${err.message}`));
  }
  
  module.exports = connectDB;