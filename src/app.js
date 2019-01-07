import express from 'express';
import bodyParser from 'body-parser';
import dbConnector from './db/connect';
import contactModal from './db/contact';

const app = express();
dbConnector.connect();

app.use(express.static('public'));
app.use(bodyParser.json());

app.use((req, res, next) => {
	// Website you wish to allow to connect
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');

	// Request methods you wish to allow
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

	// Request headers you wish to allow
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, authorization');

	// Set to true if you need the website to include cookies in the requests sent
	// to the API (e.g. in case you use sessions)
	res.setHeader('Access-Control-Allow-Credentials', true);

	// Pass to next layer of middleware
	next();
});

app.get('/', (req, res) => {
	res.send('Welcome To Node App');
});

app.post('/sendMessage', (req, res) => {
	const { name, emailId, message, phone } = req.body;

	const contactInfo = {
		name,
		emailId,
		message,
		phone
	};

	contactModal.create(contactInfo, (err, data) => {
		if (err) {
			throw new Error(err);
		}
		res.json(data);
	});
});

app.get('/getMessage', (req, res) => {
	contactModal.find({}, (err, data) => {
		if (err) {
			throw new Error(err);
		}
		res.json(data);
	});
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
	console.log(` app listening on port ${PORT}`);
});
