const express = require('express');
const fs = require('fs');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('Anime'));

const dir = __dirname;

app.get('/', (req, res) => {
 console.log('Connection from ' + req.ip);
 
 fs.readdir(dir + '/Anime', (err, files) => {
	 res.render('index', {files: files});
 });
});

app.get('/video/:file', (req, res) => {
	console.log(req.params.file);
	const host = req.get('host');
	res.render('video', {title: req.params.file, file: req.protocol +"://" + host + "/" + req.params.file});
});

const server = app.listen(7000, () => {
	const port = server.address().port;
	console.log(`Listening @ ${port}`);
});
