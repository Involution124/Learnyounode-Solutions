


var mod = require("./program6-module.js");
if(process.argv.length!=4){
	console.log("Need 4 arguments");
	process.exit(1);
}
 
var ext = process.argv[3];
var dir = process.argv[2];

var x = mod(ext, dir, function(err, data){
	if(err){
		console.log("Damn, err: " + err);
	} else {
		for(var y in data){
			console.log(data[y]);
		}
	}
});
