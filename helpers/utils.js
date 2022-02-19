const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);

const writeFile = (destination, content) =>
	fs.writeFile(destination, JSON.stringify(content, null, '\t'), (err) =>
		err ? console.error(err) : console.info(`\nData written to ${destination}`)
	);

const readAndAppend = (content, file) => {
	fs.readFile(file, 'utf8', (err, data) => {
		if (err) {
			console.error(err);
		} else {
			const parsedData = JSON.parse(data);
			parsedData.push(content);
			writeToFile(file, parsedData);
		}
	});
};

module.exports = { readFile, writeFile, readAndAppend };