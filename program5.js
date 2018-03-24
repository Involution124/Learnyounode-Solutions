var fs = require("fs");
var path = require("path");

if(process.argv.length!=4){
	console.log("Need 4 arguments");
	process.exit(1);
}

var ext = process.argv[3];
var dir = process.argv[2];



fs.readdir(dir, callback);

function callback(err, list){
	if(err){
		console.log("There was an err " + err);
		process.exit(1);
	} else {
		for(var x in list){
			if(path.extname(list[x]).substr(1) == ext){
				console.log(list[x]);
			}
		}
	}
}
