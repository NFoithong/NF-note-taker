const fs = require('fs');
const path = require('path');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('./develop/public'));



// route to index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './develop/public/index.html'));
});
// route to notes.html
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './develop/public/notes.html'));
});
// when use click anything on app it will jump to index.html page
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './develop/public/index.html'));
});

app.listen(PORT, () => {
    console.log(`APP listening on port ${PORT}`);
})