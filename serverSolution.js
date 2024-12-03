const http = require('http');
const { promisify } = require('util');

const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end('Hello, World!');
});

const listen = promisify(server.listen).bind(server);

async function startServer(port) {
  try {
    await listen(port);
    console.log(`Server running at http://localhost:${port}/`);
  } catch (err) {
    if (err.code === 'EADDRINUSE') {
      console.error(`Port ${port} is already in use. Retrying in 1 second...`);
      await new Promise(resolve => setTimeout(resolve, 1000));
      return startServer(port); // Recursive call with exponential backoff
    } else {
      console.error('Failed to start server:', err);
      process.exit(1); // Exit process with error code
    }
  }
}

const port = 8080; 
startServer(port); 