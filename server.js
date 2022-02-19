const express = require('express');
const app = express();
const path = require('path');
const api = require('./routes/api.js');
const PORT = process.env.PORT || 3001;

// send to notes.html
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
})

// * route for index.html
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, './public/index.html'));
});

// puts the url in the console to click on
app.listen(PORT, () =>
	console.log(`App listening at http://localhost:${PORT}`)
);