const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

// Replace 'yourDatabase' with your actual database name
const mongoURI = 'mongodb://localhost/yourDatabase';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Import the Story model from the models directory
const Story = require('./models/story');

// Define routes for CRUD operations
// POST route for creating a new story
app.post('/api/stories', (req, res) => {
  const newStory = new Story(req.body);
  newStory.save()
    .then(story => res.status(201).json(story))
    .catch(err => res.status(400).json({ message: "Error saving story", error: err }));
});

// GET route for fetching all stories
app.get('/api/stories', (req, res) => {
  Story.find()
    .then(stories => res.json(stories))
    .catch(err => res.status(500).json({ message: "Error fetching stories", error: err }));
});

// DELETE route for deleting a story
app.delete('/api/stories/:id', (req, res) => {
  Story.findByIdAndRemove(req.params.id)
    .then(() => res.json({ message: "Story deleted" }))
    .catch(err => res.status(500).json({ message: "Error deleting story", error: err }));
});

// PUT route for updating a story
app.put('/api/stories/:id', (req, res) => {
  Story.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(story => res.json(story))
    .catch(err => res.status(400).json({ message: "Error updating story", error: err }));
});

// Catchall handler for any request that doesn't match the above
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'mainPage.html'));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
