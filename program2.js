var num = 0, ctr = 0;
for(ctr; ctr<process.argv.length; ctr++){
	if(ctr>1){
		num= num+Number(process.argv[ctr]);
	}
}
console.log(num);
