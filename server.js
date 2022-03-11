const express = require('express');
const path = require('path');
const notes = require('./db/db');
const PORT = process.env.PORT || 3001
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

console.log(notes);

// API Routes

app.get('/api/notes', (req, res) => {
    // read db.json file and return all saved notes as JSON
    
    console.log(notes);
    if (!notes) {
        console.log("No notes found.");
        return;
    }
    res.json(notes)
});

app.post('/api/notes', (req, res) => {
    // receive a new note to save on the request body
    const newNote = body;
    // req.body.id = notes.length.toString();

    // add it to the db.json file, then
    // return the new note to the client
    notes.push(newNote) 

    // You'll need to find a way to give each note a unique id when it's saved 
    // (look into npm packages that could do this for you).
    // uuid (already installed)
})


// HTML Routes

// GET /notes should return the notes.html file.
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'))
})

// GET * should return the index.html file.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
})

// app.listen call
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
})