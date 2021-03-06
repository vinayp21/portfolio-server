import mongoose from 'mongoose';
import config from './config';

const dbConnector = {
	connect: () => {
		mongoose.Promise = global.Promise;
		mongoose.connect(
			config.dbName,
			{ useNewUrlParser: true },
			(err, db) => {
				if (err) {
					throw new Error(err);
				}
				console.log(`connected to  db ${db}`);
			}
		);
	}
};

module.exports = dbConnector;
