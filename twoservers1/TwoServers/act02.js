var http = require("http");

// Define a port to listen for incoming requests
var PORT1 = 7000;
var PORT2 = 7500;

// Create a generic function to handle requests and responses
function handleRequest1(request, response) {

  // Send the below string to the client when the user visits the PORT URL
  response.end("Something Bad about yourself Path Hit: " + request.url);
}
function handleRequest2(request, response) {

    // Send the below string to the client when the user visits the PORT URL
    response.end("something good about yourself: " + request.url);
  }
// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
var server1 = http.createServer(handleRequest1);
var server2 = http.createServer(handleRequest2);
// Start our server so that it can begin listening to client requests.
server1.listen(PORT1, function() {

  // Log (server-side) when our server has started
    console.log("Something bad about your self: http://localhost:" + PORT1);
});
server2.listen(PORT2, function() {
    console.log("Something good about yourself: http://localhost:" + PORT2);    
})