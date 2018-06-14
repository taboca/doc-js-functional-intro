var fahrenheit = [0, 32, 45, 50, 75, 80, 99, 120];

var celcius = fahrenheit.map(elem => Math.round((elem - 32) * 5 / 9));

console.log(celcius);

var mapperCalbackFunction = function(elem) { 
	return Math.round((elem - 32) * 5 / 9);
} 

var celcius = fahrenheit.map(mapperCalbackFunction);

console.log(celcius);
