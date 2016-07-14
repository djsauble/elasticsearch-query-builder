const http = require('http');
const finalhandler = require('finalhandler');
const serveStatic = require('serve-static');

const serve = serveStatic('./public');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url == '/') {
    // Display the index page
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write('<!DOCTYPE html>\n');
    res.write('<html>\n');
    res.write('<head>\n');
    res.write('<script src="bundle.js"></script>\n');
    res.write('</head>\n');
    res.write('<body>\n');
    res.write('<div id="app_root"></div');
    res.write('</body>\n');
    res.write('</html>\n');
    res.end();
  }
  else {
    // Fetch the requested file
    var done = finalhandler(req, res);
    serve(req, res, done);
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
