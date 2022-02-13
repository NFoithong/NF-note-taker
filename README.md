<<<<<<< HEAD
# Note Taker Application

## Desciption
Create an application called Note Taker that can be used to write and save notes. This application will use an Express.js back end and will save and retrieve note data from a JSON file.

The application’s front end has already been created. It's your job to build the back end, connect the two, and then deploy the entire application to Heroku.

## Table of Contents:
### • [Description](#description)
### • [Installation](#installation)
### • [Usage](#usage) 
### • [Mock-Up](#mock-up)
### • [Video Demo](#video-demo)
### • [License](#license)
### • [Contributors](#contributors)
### • [Testing](#testing)

## Installation
node js, express js, nodemon, npm 
## Usage
The following HTML routes should be created:
- GET /notes should return the notes.html file.
- GET * should return the index.html file.

The following API routes should be created:
- GET /api/notes should read the db.json file and return all saved notes as JSON.
- POST /api/notes should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).
- DELETE /api/notes/:id should receive a query parameter containing the id of a note to delete. In order to delete a note, you'll need to read all notes from the db.json file, remove the note with the given id property, and then rewrite the notes to the db.json file.

## Mock-Up
- Note Taker index page
![index](./develop/db/public/../../public/assets/images/index-page.png)

- Note Taker input data
![open note taker](./develop/db/public/../../public/assets/images/notes-taker-open.png)

- Input data
![notesdata](./develop/db/public/../../public/assets/images/input-notes.png)

- Delete data
![delete data](./develop/db/public/../../public/assets/images/delete-notes.png)

## Video Demo
# Click the link to walkthrough video demonstrating the functionality of the application
## License
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
https://opensource.org/licenses/MIT

## Contributors
N/A


## Deploy
=======
# NF-note-taker
Create an application called Note Taker that can be used to write and save notes. This application will use an Express.js back end and will save and retrieve note data from a JSON file.
>>>>>>> 13a5bb0db9a671fd4add511fe32f329f380063f8
