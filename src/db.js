export default callback => {
	// connect to a database if needed, then pass it to `callback`:
	const sqlite3 = require('sqlite3').verbose();

	// open database in memory
	// var file = './src/db/gameindex.db'; //sample game index db 
	var file = './src/db/chinook.db'; //tutorial db

	let db = new sqlite3.Database(file, sqlite3.OPEN_READONLY, (err) => {
		if (err) {
			return console.error(err.message);
		}
		console.log("Connected to " + file + " database.");
	});
	
	callback();
}
