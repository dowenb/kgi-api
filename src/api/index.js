import { version } from '../../package.json';
import { Router } from 'express';

export default ({ config, db }) => {
	let api = Router();

	// perhaps expose some API metadata at the root
	api.get('/', (req, res) => {
		res.json({ version });
	});

	//return a game
	api.get('/games', (req, res) => {
		let sql = `SELECT Title FROM 'gameindex'`;

		db.all(sql, (err, games) => {
			if (err) {
				throw err;
			}
			console.log(JSON.stringify(games));
			res.json(JSON.stringify(games));
		});
	});

	return api;
}
