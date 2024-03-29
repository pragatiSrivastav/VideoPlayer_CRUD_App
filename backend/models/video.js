const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const videoSchema = new Schema({
  title: { type: String, required: true },
  url: { type: String, required: true, unique: true },
  description: { type: String, required: true },
});

const VideoPlayer = new mongoose.model("VideoPlayer", videoSchema);

module.exports = VideoPlayer;
