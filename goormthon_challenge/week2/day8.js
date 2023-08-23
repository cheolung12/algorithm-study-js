const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	
	for await (const line of rl) {
		let pain = Number(line);
		let count = 0;
		
		while(pain > 0){
			if(pain >= 14 ){
				pain -= 14;
				count++;
			}
			else if (pain >= 7){
				pain -= 7;
				count++;
			}
			else if (pain >= 1){
				pain -= 1;
				count++;
			}
		}
		console.log(count);
		rl.close();
	}
	
	process.exit();
})();
