var fs = require("fs");
var path = require("path");


module.exports = function (extension, dirname, callback){
	fs.readdir(dirname, function(err,list){
		if(err){
			return callback(err);
		}
		var retArray = [];
		for(var x in list){
			if(path.extname(list[x]).substr(1) == extension){
				retArray.push(list[x]);
			}
		}
		callback(null, retArray);
	});
}
