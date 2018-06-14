//const sum = (...numbers) => numbers.reduce((acc, current) => acc + current, 1)  

const sum = function(...numbers) { 

	let reducer = function (acc, current) { 
		return acc + current; 
	} 

	let value = numbers.reduce(reducer, 0); 
 
	return value;
} 


console.log(sum(1,2));
