const mongoose = require('mongoose');

const storySchema = new mongoose.Schema({
  title: String,
  img_name: String,
  text: String,
  author: { type: String, default: "Anonymous" },
  date: { type: Date, default: Date.now }
});

const Story = mongoose.model('Story', storySchema);

module.exports = Story;
