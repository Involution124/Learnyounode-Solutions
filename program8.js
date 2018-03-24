var http = require("http");

if(process.argv.length!=3){
	console.log("We need an argument");
	process.exit(1);
}
var data1 = "";
http.get(process.argv[2], function(response){
	response.on("data", function(data){
		if(data.toString()!=undefined){
			data1 += data.toString();
		}
		});
	response.on("error", function(error){
		console.log("There was an error" + error);
	});
	response.on("end", function(end){
		console.log( data1.length);
		console.log( data1);
	});

});


