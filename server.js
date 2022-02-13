// need fs to read and write to files
const fs = require('fs');
// need path for filename paths
const path = require('path');
// need express to interact with the front end
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001;

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, './develop/public')));
// app.use(express.static(path.resolve(process.cwd(), 'develop/public')))
app.use(express.static('public'));

let notesData = [];


// api call response for all the notes, and sends the results to the browser as an array of object
app.get('/api/notes', (err, res) => {
    try {
        // reads the notes from json file
        notesData = fs.readFileSync('./develop/db/db.json', 'utf8');
        // parse it so notesData is an array of objects
        notesData = JSON.parse(notesData);
    } // error handling
    catch (err) {
        console.log(err);
    }
    //   send objects to the browser
    res.json(notesData);
});

// writes the new note to the json file
app.post('/api/notes', (req, res) => {
    try {
        // reads the json file
        notesData = fs.readFileSync('./develop/db/db.json', 'utf8');
        // parse the data to get an array of objects
        notesData = JSON.parse(notesData);
        // Set new notes id
        req.body.id = notesData.length;
        // add the new note to the array of note objects
        notesData.push(req.body) // req.body - user input
            // make it string(stringify)so you can write it to the file
        notesData = JSON.stringify(notesData);
        // writes the new note to file
        fs.writeFileSync('./develop/db/db.json', notesData, 'utf8', (err) => {
            // error handling
            if (err) throw err;
        });
        // changeit back to an array of objects & send it back to the browser
        res.json(JSON.parse(notesData));
        // error handling
    } catch (err) {
        throw err;
        console.error(err);
    }
});

// Delete a note
app.delete('/api/notes/:id', (req, res) => {
    try { //  reads the json file
        notesData = fs.readFileSync('./develop/db/db.json', 'utf8');
        // parse the data to get an array of the objects
        notesData = JSON.parse(notesData);
        // delete the old note from the array on note objects
        notesData = notesData.filter((note) => {
            return note.id != req.params.id;
        });
        // make it string(stringify)so you can write it to the file
        notesData = JSON.stringify(notesData);
        // write the new notes to the file
        fs.writeFileSync('./develop/db/db.json', notesData, 'utf8', (err) => {
            // error handling
            if (err) throw err;
        });
        // change it back to an array of objects & send it back to the browser
        res.json(JSON.parse(notesData));

        // error handling
    } catch (err) {
        throw err;
        console.error(err);
    }
})

//HTML get request

// route to index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './develop/public/index.html'));
    // res.sendFile(path.resolve(process.cwd(), './develop/public/index.html'));
});
// route to notes.html
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './develop/public/notes.html'));
    // res.sendFile(path.resolve(process.cwd(), './develop/public/notes.html'));
});
// If no matching route is default to index.html page
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './develop/public/index.html'));
    // res.sendFile(path.resolve(process.cwd(), './develop/public/index.html'));
});

// Get api/notes
app.get('api/notes', (req, res) => {
    return res.sendFile(path.join(__dirname, './develop/db/db.json'));
    // return res.sendFile(path.resolve(process.cwd(), './develop/db/db.json'));
});

app.listen(PORT, () => {
    console.log("APP listening on port" + PORT);
})