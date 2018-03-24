var fs = require("fs");


function callback(err, data){
	if(err){
		console.log(err);
	} else {
		var string = data.toString();
		var lines = string.split("\n").length -1;
		console.log(lines);
	}
}
if(process.argv[2]){
	fs.readdir(process.argv[2], callback);
} else {
	console.log("No input file \n");
}
