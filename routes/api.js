const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const {
    readFile,
	readAndAppend,
} = require('../helpers/utils.js');

// make a get route for notes that returns the notes.html
router.get('/notes', (req, res) => {
    // gets db file and renders it with JSON so computer can read it
    readFile('./db/db.json')
    .then((data) => 
    res.json(JSON.parse(data)));
})

// allows user to post to the notes and add it to the db.json file
router.post('/notes', (req, res) => {
	const { title, text } = req.body;
	if (title && text) {
		const newNote = {
			title,
			text,
            //npm mod that creates uuid for id (long id) 
			id: uuidv4(),
		};
		readAndAppend(newNote, './db/db.json');

		const response = {
			status: 'success',
			body: newNote,
		};
		res.json(response);
	} else {
		res.json('Error in adding note');
	}
})

