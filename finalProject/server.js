// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const Story = require('./models/story'); // Ensure this path matches the location of your story model file

const app = express();
const mongoURI = 'mongodb+srv://mtomgilman:3J8nEvQFwyEnfQUZ@cluster0.i7bsuyl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// POST route to create a new story
app.post('/api/stories', cors(), (req, res) => {
  const newStory = new Story(req.body);
  newStory.save()
    .then(story => res.status(201).json(story))
    .catch(err => res.status(400).json({ message: "Error saving story", error: err }));
});

// GET route to fetch all stories
app.get('/api/stories', (req, res) => {
  Story.find()
    .then(stories => res.json(stories))
    .catch(err => res.status(500).json({ message: "Error fetching stories", error: err }));
});

// DELETE route to delete a story
app.delete('/api/stories/:id', (req, res) => {
  Story.findByIdAndRemove(req.params.id)
    .then(() => res.json({ message: "Story deleted" }))
    .catch(err => res.status(500).json({ message: "Error deleting story", error: err }));
});

// PUT route to update a story
app.put('/api/stories/:id', (req, res) => {
  Story.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(story => res.json(story))
    .catch(err => res.status(400).json({ message: "Error updating story", error: err }));
});

// Serve the main page for any other requests
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'mainPage.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
