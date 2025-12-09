'use strict';

function calcAge(birthYear){
	const age = 2025 - birthYear;

	function printAge(){
		let output = `${firstName} you are ${age}, born in ${birthYear}`
		console.log(output);

		if(birthYear >= 1981 && birthYear <= 1996){
			var millenial = true;
			const firstName = "yac";
			const str = `oh, and you are a millenial, ${firstName}`
			console.log(str);	
			console.log('');

			function add(a, b){
				return a + b;
			}
		output = "new output";
		}
		//console.log(add(2,3));
		console.log(output);	
	}
	printAge()

	
	return age;
}

const firstName = "jonas";
console.log( calcAge(1988))