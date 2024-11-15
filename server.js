
const http = require('http');
const net = require('net');

// // Create an HTTP server to handle Cloud Run's HTTP requests
// const server = http.createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.end('This is a TCP server wrapped in HTTP for Cloud Run.\n');
// });

// // Start the HTTP server
// const PORT = process.env.PORT || 3000;
// server.listen(PORT, () => {
//   console.log(`HTTP server listening on port ${PORT}`);
// });

// Create a TCP server
const tcpServer = net.createServer((socket) => {
  console.log('Client connected');

  socket.on('data', (data) => {
    console.log(`Received: ${data}`);
    socket.write(`From server: ${data}`);
  });

  socket.on('end', () => {
    console.log('Client disconnected');
  });

  socket.on('error', (err) => {
    console.error(`Socket error: ${err}`);
  });
});

// Start the TCP server on a different port
const TCP_PORT = 80;
tcpServer.listen(TCP_PORT, '0.0.0.0', () => {
  console.log(`TCP server listening on port ${TCP_PORT}`);
});
