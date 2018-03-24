var http = require("http");
var fs = require("fs");
var throughmap = require("through2-map");
if(process.argv.length!=3){
	console.log("Usage: " + process.argv[1] + " <port>");
	process.exit(1);
}

var server = http.createServer(function(request, response) {
	request.pipe(throughmap(function(instr){
		return instr.toString().toUpperCase();
	})).pipe(response);
}).listen(process.argv[2]);
