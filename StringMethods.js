var str = 'Hello world'
var res = str.charAt(0);
console.log(res); //  H

var charcodeat = str.charCodeAt(0);
console.log(charcodeat); // 72;

var msg = " To all"
var res = str.concat(msg);
console.log(res); // Hello world To all

var res = str.endsWith('world');
console.log(res); // true

var res = String.fromCharCode(65);
console.log(res); // A

var res = str.includes(' world');
console.log(res); // true

var res = str.indexOf('world');
console.log(res); // 6 

var res = str.lastIndexOf('world');
console.log(res); // 6 
var a = "ab"
var b = "ab"
var res = a.localeCompare(b);
console.log(res) // 0 

var name = "The rain in Spain stays mainly in the plain"
var res = name.match(/ain/g);
console.log(res); // [ 'ain', 'ain' ] 

var repeateIt = "Hello "
var res = repeateIt.repeat(3);
console.log(res)  // Hello Hello Hello 
var helloWorld = "Hello World"
var res = helloWorld.replace('Hello',"HI")
console.log(res) // HI World 

var res = helloWorld.search("World");
console.log(res); // 6
// The search() method searches a string for a 
// specified value, and returns the position of the 
// match
var res = helloWorld.splice(0,5);
console.log(res); // Hello

var res = helloWorld.slice(0, 5);
console.log(res); // Hello

var res = helloWorld.split(" ")
console.log(res); // [ 'Hello', 'World' ]

var res = helloWorld.startsWith("Hello");
console.log(res); // true

var res = helloWorld.substr(1,4);
console.log(res); // ello

var res = helloWorld.substring(1,4);
console.log(res); // ello

var res = helloWorld.toLocaleLowerCase();
console.log(res) // hello world

var res = helloWorld.toLocaleUpperCase();
console.log(res) // HELLO WORLD

var res = helloWorld.toLowerCase();
console.log(res) // hello world

var res = helloWorld.toUpperCase();
console.log(res) // HELLO WORLD

var trimIt = "   Hello World   "
var res = trimIt.trim();
console.log(res); // Hello World