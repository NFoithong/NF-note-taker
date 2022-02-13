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
![index](https://user-images.githubusercontent.com/69065671/153745449-481ca1ca-8c9d-4c68-918b-c98cb59631fd.png)

- Note Taker input data
![open note taker](https://user-images.githubusercontent.com/69065671/153745451-ab22c2f8-c984-455c-971d-782406efa5c9.png)

- Input data
![notesdata](https://user-images.githubusercontent.com/69065671/153745450-94c56189-091e-4e5a-b888-f6ace85151ba.png)

- Delete data
![delete data](https://user-images.githubusercontent.com/69065671/153745448-ba4e6fd7-8a51-4d80-878a-c48dbd0c711e.png)

## Video Demo
# Click the link to walkthrough video demonstrating the functionality of the application
![video-demo](https://user-images.githubusercontent.com/69065671/153745453-71dd51a2-008b-450a-a453-ddfcb2201471.mp4)

## License
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
https://opensource.org/licenses/MIT

## Contributors
N/A


## Deploy
Heroku: https://nf-note-taker.herokuapp.com/
