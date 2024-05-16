// Setting up express server
const express = require('express');
const path = require('path');
var cors = require('cors');
const app = express();

// The server will only serve static files from the dist directory
app.use(cors());
app.use(express.static('./dist'));

// Path to the directory where files are stored on disk
const FILES_DIR = path.join(__dirname, 'files');

// Routing to serve the index.html page
app.get('/demo1', (req, res) =>
  res.sendFile('index.html', { root: 'dist/' })
);

// Routing to download a file
app.get('/download/:file', function(req, res, next) {
  const file_name = FILES_DIR + '/' + req.params.file;
  res.download(file_name, function(err) {
    if (!err) return; // File sent
    if (err.status !== 404) return next(err); // Error other than 404
    // File for download not found
    res.statusCode = 404;
    res.send('Failed to find file!');
  });
});

const portno = 3000; // Port number to be used
// Starting the server
const server = app.listen(portno, function() {
  const port = server.address().port;
  console.log(
    "Server is running at http://localhost:" +
      port +
      " and serving directory " +
      __dirname
  );
});