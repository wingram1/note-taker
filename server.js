const express = require('express');
const path = require('path');
const fs = require('fs');
const { notes } = require('./db/db');
const { v4: uuidv4 } = require('uuid');
const PORT = process.env.PORT || 3001
const app = express();

console.log("Logging three uuid's...");
console.log(uuidv4());
console.log(uuidv4());
console.log(uuidv4());
console.log("Logging over");

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

console.log(notes);

// API Routes

app.get('/api/notes', (req, res) => {
    // read db.json file and return all saved notes as JSON
    
    console.log("Initial notes array: " + notes);
    if (!notes) {
        console.log("No notes found.");
        return;
    }
    res.json(notes)
});

app.post('/api/notes', (req, res) => {
    // receive a new note to save on the request body
    const newNote = req.body;
    req.body.id = uuidv4();
    console.log("New note: " + JSON.stringify(req.body))

    // add it to the db.json file, then
    notes.push(newNote)

    fs.writeFileSync(
        path.join(__dirname, './db/db.json'),
        JSON.stringify({notes: notes }, null, 2)
    );

    // return the note note to the client
    res.json(newNote);
});


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