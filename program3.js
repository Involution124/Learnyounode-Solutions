var fs = require("fs");

if(process.argv[2]){
var buffer1 = fs.readFileSync(process.argv[2]);
var stringv = buffer1.toString();
var lines = stringv.split("\n").length-1;
console.log(lines);
}
