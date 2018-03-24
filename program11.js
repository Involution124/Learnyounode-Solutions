var http = require("http");
var fs = require("fs");

if(process.argv.length!=4){
	console.log("Usage: " + process.argv[1] + " <port> <file>");
	process.exit(1);
}

var server = http.createServer(function(request, response) {
	fs.createReadStream(process.argv[3]).pipe(response);
});


server.listen(process.argv[2]);
