var http = require("http");

if(process.argv.length!=3){
	console.log("We need 2 arguments");
	process.exit(1);
}

http.get(process.argv[2], function(response){
	response.on("data", function(data){
		console.log( data.toString());
	});
	response.on("error", function(error){
		console.log("There was an error" + error);
	});
	response.on("end", function(end){
	//	console.log("fuck it ended");
	});

});

