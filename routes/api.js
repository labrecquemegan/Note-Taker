const router = require('express').Router();
const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const {
    readFile,
	readAndAppend,
} = require('../helpers/fsUtils.js');

// make a get route for notes that returns the notes html
router.get('/notes', (req, res) => {
    // gets db file and renders it with JSON so computer can read it
    readFile('./db/db.json')
    .then((data) => 
    res.json(JSON.parse(data)));
})

// allows user to post to the notes and add it to the db.json file
router.post('/notes', (req, res) => {
	// Creates a new entry
	const { title, text } = req.body;
	if (title && text) {
		const newNote = {
			title,
			text,
			id: uuidv4(),
		};
		readAndAppend(newNote, './db/db.json');

		// Send response
		const response = {
			status: 'success',
			body: newNote,
		};
		res.json(response);
	} else {
		res.json('Error in adding note');
	}
})
