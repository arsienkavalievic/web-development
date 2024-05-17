const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.static('./dist'));

app.get('/application', (req, res) =>
	res.sendFile('./index.html', {root: 'dist/'}),
);

app.get('/download', (req, res) =>
	res.download('./base.json', {root: 'files/'}),
);

app.listen(PORT, () => {
	console.log('Server is builded on port ' + PORT);
});