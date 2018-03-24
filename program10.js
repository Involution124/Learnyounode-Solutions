var net = require("net");
var strftime = require("strftime");


if(process.argv.length!=3){
	console.log("Usage: " + process.argv[1] + " <port>");
	process.exit(1);
}


var server = net.createServer(function(socket) {
	var x = new Date();
	var dat = strftime("%F %H:%M", x);
	socket.write(dat);
	socket.write("\n"); // You need this for some reason? 
	socket.end();
});


server.listen(process.argv[2]);
