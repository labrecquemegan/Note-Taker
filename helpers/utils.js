const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);

const readAndAppend = (content, file) => {
	fs.readFile(file, 'utf8', (err, data) => {
		if (err) {
			console.error(err);
		} else {
			const parsedData = JSON.parse(data);
			parsedData.push(content);
			writeToFile(parsedData);
		}
	});
};

const writeToFile = (answers) => {
    return fs.writeFileSync("./db/db.json", JSON.stringify(answers))
}

module.exports = {readFile, readAndAppend};