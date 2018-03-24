var http = require("http");
var url = require("url");

if(process.argv.length!=3){
	console.log("Usage: " + process.argv[1] + " <port> ");
	process.exit(1);
}


var server = http.createServer(function(request, response){
	var objj = url.parse(request.url, true);
	if(objj.pathname=="/api/parsetime" && objj.query.iso ){
		response.writeHead(200, { "Content-Type" : "application/json" } );
		
		var dat = new Date(objj.query.iso);
		var obj = {  hour: 0, minute:0,  second:0};
		obj.minute = dat.getMinutes();
		obj.hour = dat.getHours();
		obj.second = dat.getSeconds();
		console.log(obj);
		response.write(JSON.stringify(obj));
	}else if(objj.pathname=="/api/unixtime" && objj.query.iso){
		response.writeHead(200, { "Content-Type" : "application/json" } );
		var dat = new Date(objj.query.iso).getTime();
		var obj = {unixtime: dat};
		console.log(obj);
		response.write(JSON.stringify(obj));
	} else {
		console.log(" error, wrong url : ");
	}
	response.end();
});

server.listen(process.argv[2]);

