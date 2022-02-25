const express = require('express');
// const fs = require('fs'); dont know if i need
const path = require('path');
const { db } = require('./db.json');
const PORT = process.env.PORT || 6969
const app = express();


// API Routes

app.get('/api/notes', (req, res) => {
    // read db.json file and return all saved notes as JSON
})

app.post('/api/notes', (req, res) => {
    // receive a new note to save on the request body

    // add it to the db.json file, then
    // return the new note to the client 

    // You'll need to find a way to give each note a unique id when it's saved 
    // (look into npm packages that could do this for you).
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