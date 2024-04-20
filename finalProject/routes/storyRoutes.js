// storyRoutes.js
const express = require('express');
const router = express.Router();
const Story = require('../models/story'); // Assuming your Story model is in models/story.js

// Get all stories
router.get('/', async (req, res) => {
  try {
    const stories = await Story.find();
    res.json(stories);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new story
router.post('/', async (req, res) => {
  const story = new Story({
    // ... initialize properties with req.body
  });
  try {
    const newStory = await story.save();
    res.status(201).json(newStory);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a story
router.patch('/:id', getStory, async (req, res) => {
  // ... update story with req.body
  try {
    const updatedStory = await res.story.save();
    res.json(updatedStory);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a story
router.delete('/:id', getStory, async (req, res) => {
  try {
    await res.story.remove();
    res.json({ message: 'Deleted Story' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Middleware to get story by ID
async function getStory(req, res, next) {
  let story;
  try {
    story = await Story.findById(req.params.id);
    if (story == null) {
      return res.status(404).json({ message: 'Cannot find story' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.story = story;
  next();
}

module.exports = router;
