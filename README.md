# Map and Reduce glimpser

Let's look a the map function which returns a new array based in a given array and a function that you need to pass: 

```
var newArray = oldArray.map(operatorFunction); 
```

If your operatorFunction is something like this: 

```
var operatorFunction = function(current_element) { 
   return current_element;
} 

```
Then you will have a new array which is a copy of the old one. 

Now let's look in a conversion script from fahrenheit to celcius: 

```
var fahrenheit = [0, 32, 45, 50, 75, 80, 99, 120];

var mapperCalbackFunction = function(elem) { 
	return Math.round((elem - 32) * 5 / 9);
} 

var celcius = fahrenheit.map(mapperCalbackFunction);

console.log(celcius);

```

In the old school, Marcio's approach, instead of using the Array's map method, you could alternatively consider: 

```
var my_Old_Array = [1,2,3]; 
var my_New_Array = [1,2,3]; 

for(var i = 0; i < my_Old_Array.length; i++) {
  my_New_Array.push(my_Old_Array[i]);
}
```


## Reference

https://danmartensen.svbtle.com/javascripts-map-reduce-and-filter

## Reference 

https://medium.com/@matheusml/o-guia-do-es6-tudo-que-voc%C3%AA-precisa-saber-8c287876325f

### Redux: The Single Immutable State Tree

* https://egghead.io/lessons/react-redux-the-single-immutable-state-tree

### Redux: Describing State Changes with Actions

* https://egghead.io/lessons/react-redux-describing-state-changes-with-actions

### Redux: Pure and Impure Functions

* https://egghead.io/lessons/react-redux-pure-and-impure-functions

### Redux: The Reducer Function

* https://egghead.io/lessons/react-redux-the-reducer-function


