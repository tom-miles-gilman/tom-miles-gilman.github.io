const mongoose = require('mongoose');

const storySchema = new mongoose.Schema({
    title: {
      type: String,
      required: true
    },
    img_name: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    author: {
      type: String,
      default: 'Anonymous'
    },
    created_at: {
      type: Date,
      default: Date.now
    }
  });

const Story = mongoose.model('Story', storySchema);

module.exports = Story;
