const mongoose = require("mongoose");

const connectToMongo = () => {
  mongoose
    .connect("mongodb://0.0.0.0:27017/videoplayer", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Database connected successfully");
    })
    .catch((e) => {
      console.log("Error in connecting to db...");
    });
};

module.exports = connectToMongo;
