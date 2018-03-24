var http = require("http");
if(process.argv.length!=5){
	console.log("Not enough args");
}
var data1 = "";
var counter = 1;



function callback(response){
	response.on("data", function(data){
		data1+=data.toString();
	});
	response.on("error", function(error){
		console.log("There was an error" + error.toString());
	});
	response.on("end", function(vaar){
		if(counter<4){
			http.get(process.argv[counter+2], callback); 
			console.log(data1);
			data1="";
			counter++;
		}
	});
}

http.get(process.argv[2], callback);

