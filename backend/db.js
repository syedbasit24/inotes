const mongoose = require("mongoose");
const mongoURI =
  "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false";

//connect mongoose to database
const connectToMongo = () => {
  mongoose.connect(mongoURI, () => {
    console.log("connect to mongoose succesfully");
  });
};

module.exports = connectToMongo;
