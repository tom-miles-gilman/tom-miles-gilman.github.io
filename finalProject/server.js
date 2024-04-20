const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

// Replace 'yourDatabase' with your actual database name
const mongoURI = 'mongodb://localhost/yourDatabase';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Story Model - this should be in a separate file in models directory
const storySchema = new mongoose.Schema({
  title: String,
  img_name: String,
  text: String,
  author: { type: String, default: "Anonymous" },
  date: { type: Date, default: Date.now }
});

const Story = mongoose.model('Story', storySchema);

// Routes - these should be in separate files in the routes directory
// Get Stories
app.get('/api/stories', async (req, res) => {
  try {
    const stories = await Story.find();
    res.json(stories);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Add Story
app.post('/api/stories', async (req, res) => {
  const newStory = new Story(req.body);
  try {
    const savedStory = await newStory.save();
    res.json(savedStory);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Update Story
app.put('/api/stories/:id', async (req, res) => {
  try {
    const updatedStory = await Story.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedStory);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Delete Story
app.delete('/api/stories/:id', async (req, res) => {
  try {
    await Story.findByIdAndDelete(req.params.id);
    res.json({ message: 'Story deleted' });
  } catch (err) {
    res.status(500).send(err);
  }
});

// Serve the main page of the app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
