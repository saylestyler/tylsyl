---
templateKey: blog-post
title: javascript dump
date: '2017-07-24T12:40:07-04:00'
description: javascript.info
tags:
  - javascript
  - dump
---

## ts interfaces = complex type definitions

```js
interface Puppy {
  name: string;
  age: number;
};

const realPuppy: Puppy = {
  name: 'Pikachu',
  age: 1
};

const notRealPuppy: Puppy = {
  says: 'meow' // Error: this is clearly not a puppy
}
```

## array types\<ay\>

`catsArray:string[] | catsArray:Array<string>`

```js
const cats: Array<string> = ['Simba', 'Aslan'];
// Type[] does the same thing.
const cats2: string[] = ['Simba', 'Aslan'];

interface Cat {
  name: string,
  age: number
}

const betterCats: Array<Cat> = [
  {name: 'Simba', age: 22},
  {name: 'Aslan', age: 9999}
];
```

## classes = group methods & properties together

```js
export class Puppy {
  // This is a method.
  bark(){
    // That's how russian dogs talk.
    return 'Gav gav!!';
  }
}

// Now we can instantiate (create) it
var hotdog = new Puppy();
// And use its methods
console.log(hotdog.bark());
```


# .fetch()

<https://github.com/mdn/fetch-examples>

```js
fetch('/users.html')
  .then(function(response) {
    return response.text()
  })
  .then(function(body) {
    document.body.innerHTML = body
  }
)
```

... "The Fetch Standard provides a unified architecture for these features so they are all consistent when it comes to various aspects of fetching, such as redirects and the CORS protocol."

```js
var myRequest = new Request('flowers.jpg');

var myURL = myRequest.url;
```

<https://wpt.fyi/results/>

To queue a fetch task on request request to run an operation, run these steps:

1. If request’s client is null, terminate these steps.

2. Queue a task to run an operation on \_request’s client’s responsible event loop\_ (lol) using the networking task source.

# "Standard Library"

would've solved a lot of confusion starting out to have seen this ;~)

<https://en.wikipedia.org/wiki/Comparison_of_JavaScript_engines#Standard_Library>

# `MFR`

<div class="warning">
  Many articles about functional programming are written by nerdy mathematician assholes. Reading them without preliminary training is dangerous: categories and morphisms can blow your mind in exchange for nothing.
</div>

[this](https://code.tutsplus.com/tutorials/how-to-use-map-filter-reduce-in-javascript--cms-26209) blessed article:

_helps to have a "good" (realistic) array to begin w/_

```
var tasks = [
  {
    'name'     : 'go running',
    'duration' : 120
  },
  {
    'name'     : 'eat dinner',
    'duration' : 60
  },
  {
    'name'     : 'wikipedia blackhole',
    'duration' : 940
  }
];
```

### map

```javascript
var taskNames = tasks.map(x => x.name)
// undefined
console.log(taskNames)
// [ 'go running', 'eat dinner', 'wikipedia blackhole' ]
```

### filter

```javascript
// ~normal~
var difficult_tasks = [];

tasks.forEach(function(task) {
    if (task.duration >= 120) {
        difficult_tasks.push(task);
    }
});

// ~fp~
var difficult_tasks = tasks.filter(x => x.duration >= 120 );
 difficult_tasks
// [ { name: 'go running', duration: 120 }, { name: 'wikipedia blackhole', duration: 940 } ]
```

### reduce

![reduce](https://res.cloudinary.com/cloudimgts/image/upload/v1535653615/reduce.png)

verbose version:

```javascript
var total = [1, 2, 3, 4, 5].reduce(function (previous, current, index) {
    var val = previous + current;
    console.log(
      "The previous value is " + previous +
      "; the current value is " + current +
      ", and the current iteration is " + (index + 1));
    return val;
}, 0);

console.log("The loop is done, and the final value is " + total + ".");
```
## CHAINED

from <https://www.datchley.name/working-with-collections/>

```javascript
[1,2,3,4,5,6,7,8,9,10]
  .map((n) => n*2) // [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
  .filter((n) => 10 % n == 0) // [2, 10]
  .reduce((sum, n) => (sum += n), 0) // 12
```

## Array.from() = similar

```javascript
var ps = document.querySelectorAll('p');
var text = Array.from(ps, (d) => d.textContent);
console.log("p text:", text);
// The above snippet takes the DOM collection returned from querySelectorAll() and uses Array.from to map across each item and return us a "real" array of the text content from those DOM elements. To use it with the arguments variable in functions is just as easy.

// Old, ES5 way to get array from arguments
function() {
  var args = [].slice.call(arguments);
  //...
}

// Using ES6 Array.from
function() {
  var args = Array.from(arguments);
  //..
}
```

```javascript
function find(list, value) {
    var index = list.indexOf(value);
    return index == -1 ? undefined : list[index];
}
var arr = ['cat','dog','bat','badger','cow'];
console.log("dog? ", find(arr, 'dog'));
// dog? dog
console.log("weasle? ", find(arr, 'weasle'));
// weasle? undefined

var found;
// Find the first item longer than 3 characters
for (var i=0; i < arr.length; i++) {
  if (arr[i].length > 3) {
    found = arr[i];
    break;
  }
}
// found: 'badger'

// vs

// Array.find and Array.findIndex(fn)
var found = [1,4,-5,10].find((n) => n < 0);
console.log("found:", found);

var index = [1,4,-5,10].findIndex((n) => n < 0);
console.log("index:", index);

// found: -5
// index: 2

## my fav description of for of vs for in

from <https://www.datchley.name/working-with-collections/>

```javascript
The for..of loop creates a loop over any iterable object, including Array, arguments, Set, Map and custom iterable objects like generators. This is different than the for..in operator, as for..in iterates over an Array, you get indexes, not values. for..in can be used on Objects, but returns the property names, not values. for..of can not be used on Objects, as there is no default iterator defined for Objects in javascript.

var arr = [3,5,7,9],
    obj = { a: 1, b: 2, c: 3 };

// ES5 for..in over objects
for (var p in obj) {
  console.log(p);
}
// a  b   c

// ES5 for..in over arrays
for (var n in arr) {
  console.log(n);
}
// 0 1 2 3

// ES6 for..of over arrays
for (let n of arr) {
  console.log(n);
}
// 3 5 7 9
Using for..of, we can now actually iterate values on Arrays. Though we still can't use it on Objects, we can use a generator and for..of to loop over the keys and values in an object.

// using a generator function
function* entries(obj) {
   for (let key of Object.keys(obj)) {
     yield [key, obj[key]];
   }
}

for (let [key, value] of entries(obj)) {
   console.log(key, "->", value);
}

// a -> 1
// b -> 2
// c -> 3
// fun with window:


// VM893:1 postMessage -> ƒ () { [native code] }
// VM893:1 blur -> ƒ () { [native code] }
// VM893:1 focus -> ƒ () { [native code] }
// VM893:1 close -> ƒ () { [native code] }
// etc

```


<div class="green">
  "We pass it a callback, which accepts the previous value and current value as arguments, and returns the result of adding them together.  Since we passed 0 as a second argument to reduce, it'll use that as the value of previous on the first iteration."
</div>

<div class="yellow">
  reduce always returns a single value, not always a single number. If you reduce an array of arrays, for instance, it will return a single array. If you're in the habit or reducing arrays, it would be fair to expect that an array containing a single item wouldn't be a special case
</div>

that 0 made sense when changing it to 100, like so, grokkethed:

```javascript
var total = [1, 9]

var total = total.reduce(function(previous, current) {
  return previous = previous + current
}, 0)
// 10

var totes = total.reduce((pre, curr) => pre += curr, 100)
// 110
```

and you can also leave off the starting value param, lo, a \~math equation\~

```javascript
var totes = total.reduce((p, c) => p += c)
// 18
```

underhøød:

```
var reduce = function (array, callback, initial) {
  var accumulator = initial || 0;

  array.forEach(function (element) {
     accumulator = callback(accumulator, array[i]);
  });

  return accumulator;
};
```

## concatenating arrays w/ reduce

```javascript
var array_of_arrays = [[1, 2], [3, 4], [5, 6]];

var concattt = array_of_arrays.reduce((prev, current) => prev.concat(current));
// (6) [1, 2, 3, 4, 5, 6]
```

### map, filter, reduce, concat

<!-- #TODO: get src code for vfiles app w/ all that flatMap etc. -->

```javascript
var monday = [
  {
      'name'     : 'Write a tutorial',
      'duration' : 180
  },
  {
      'name'     : 'Some web development',
      'duration' : 120
  }
];

var tuesday = [
  {
      'name'     : 'Keep writing that tutorial',
      'duration' : 240
  },
  {
      'name'     : 'Some more web development',
      'duration' : 180
  },
  {
      'name'     : 'A whole lot of nothing',
      'duration'  : 240
  }
];

var tasks = [monday, tuesday]
```

classique way:

```javascript
var concatenated = monday.concat(tuesday),
    fees = [],
    formatted_sum,
    hourly_rate = 25,
    total_fee = 0;

concatenated.forEach(function (task) {
    var duration = task.duration / 60;

    if (duration >= 2) {
        fees.push(duration * hourly_rate);
    }
});

fees.forEach(function (fee) {
    total_fee += fee
});


var formatted_sum = '$' + total_fee.toFixed(2);
// "$400.00"

// vs

var result = tasks.reduce(function (accumulator, current) {
      return accumulator.concat(current);
  }).map(function (task) {
      return (task.duration / 60);
  }).filter(function (duration) {
      return duration >= 2;
  }).map(function (duration) {
      return duration * 25;
  }).reduce(function (accumulator, current) {
      return [(+accumulator) + (+current)];
  }).map(function (dollar_amount) {
      return '$' + dollar_amount.toFixed(2);
  }).reduce(function (formatted_dollar_amount) {
      return formatted_dollar_amount;
  }); // "$400.00"
```

or

```javascript
                   // Concatenate our 2D array into a single list
var result = tasks.reduce((acc, current) => acc.concat(current))
    // Extract the task duration, and convert minutes to hours
    .map((task) => task.duration / 60)
    // Filter out any task that took less than two hours
    .filter((duration) => duration >= 2)
    // Multiply each tasks' duration by our hourly rate
    .map((duration) => duration * 25)
    // Combine the sums into a single dollar amount
    .reduce((acc, current) => [(+acc) + (+current)])
    // Convert to a "pretty-printed" dollar amount
    .map((amount) => '$' + amount.toFixed(2))
    // Pull out the only element of the array we got from map
    .reduce((formatted_amount) =>formatted_amount);
```

- - -

# callbacks

after reading umpteen articles on callbacks twas this example when I grokked callbacks

```javascript
 // global variable
var allUserData = [];

// generic logStuff function that prints to console
function logStuff (userData) {
    if ( typeof userData === "string") {
        console.log(userData);
    }
    else if ( typeof userData === "object") {
        for (var item in userData) {
            console.log(item + ": " + userData[item]);
        }
    }
}

// A function that takes two parameters, the last one a callback function
function getInput (options, callback) {
    allUserData.push (options);
    callback (options);

}

// When we call the getInput function, we pass logStuff as a parameter.
// So logStuff will be the function that will called back (or executed) inside the getInput function
getInput ({name:"Rich", speciality:"JavaScript"}, logStuff);
//  name: Rich
// speciality: JavaScript
```

also, this bit:

```javascript
navigator.geolocation.getCurrentPosition(() => window.alert('worked'), () => window.alert('failed'))

// or

const successCallback = () => console.log('worked')
const failCallback = () => console.log('failed')

navigator.geolocation.getCurrentPosition(successCallback, failCallback)
```

# this

this represents the function’s context. Only functions defined with the function keyword have their own this context. Its value depends on how the function was invoked. See below the values of this depending on the doSomething() function invocation form:

```javascript
function doSomething(){
  console.log(this)
}

// Window

+------------+------------------+
| Form       | this             |
+------------+-------------------
| Function   | window/undefined |
| Method     | theObject        |
| Constructor| the new object   |
| apply      | theObject        |
| bind       | theObject        |
+------------+------------------+
```

## bloop: if it takes a parameter, it's gonna

1. reference that parameter in the function body
2. make a transformation upon it /  use it as an ingredient
3. return something other than what was fed in

## xtreme confusion about null checking = nothing to do w null heckling

```javascript
show(thing) {
  return angular.isDefined(thing)
      && this.session.user
      && this.session.user.admin
  }
}
```

## iterating over objects ~

<div class="highlight">
note: objects ≠ arrays
</div>

Object.entries(anObj) ftw

```js
let obj = { one: 1, two: 2 };

for (let [k,v] of Object.entries(obj)) {
    console.log(`${JSON.stringify(k)}: ${JSON.stringify(v)}`);
}
```

## embedding iframes

```javascript
<iframe style="height: 600px; width: 400px;"
        src="https://docs.google.com/document/d/e/2PACX-1vRZlSvpO--3GUdxpgcw64td0SFQhpLdA3oswQdZL1X-Jpq78pElAxhalIgZPFZGUyiO0zw4Okcf-RjO/pub?embedded=true">
</iframe>
```

produces:

<iframe style="height: 600px; width: 90%; font-size: 12px" src="https://docs.google.com/document/d/e/2PACX-1vRZlSvpO--3GUdxpgcw64td0SFQhpLdA3oswQdZL1X-Jpq78pElAxhalIgZPFZGUyiO0zw4Okcf-RjO/pub?embedded=true"></iframe>

## node.autocomplete

```javascript
$ node
> var anArr = [1,2,3,4,5]
> anArr. <TAB>

anArr.__defineGetter__      anArr.__defineSetter__
anArr.__lookupGetter__      anArr.__lookupSetter__
anArr.__proto__             anArr.constructor
anArr.hasOwnProperty        anArr.isPrototypeOf
anArr.propertyIsEnumerable  anArr.toLocaleString
anArr.toString              anArr.valueOf

anArr.concat                anArr.copyWithin
anArr.entries               anArr.every
anArr.fill                  anArr.filter
anArr.find                  anArr.findIndex
anArr.forEach               anArr.includes
anArr.indexOf               anArr.join
anArr.keys                  anArr.lastIndexOf
anArr.length                anArr.map
anArr.pop                   anArr.push
anArr.reduce                anArr.reduceRight
anArr.reverse               anArr.shift
anArr.slice                 anArr.some
anArr.sort                  anArr.splice
anArr.unshift
```
## Parameters & Arguments & Co. LLC

rather late to the game in grokking the following but, apparently, according to [this article](https://codeburst.io/parameters-arguments-in-javascript-eb1d8bd0ef04) it's a common src of confusion

<div class="green">
When talking about functions, the terms parameters and arguments are often interchangeably used as if it were one and the same thing but there is a very subtle difference.

* Parameters are variables listed as a part of the function definition.
* Arguments are values passed to the function when it is invoked.
</div>

![](https://res.cloudinary.com/cloudimgts/image/upload/v1535863713/params.png)

the article goes on to explain in ~ a few sentences + one code block what bewildered me for ~2 years to _even try to formulate the question_

<div class="green">
<strong>Why should we bother about this minute difference?</strong>

Well for starters, JavaScript does not throw an error if the number of arguments passed during a function invocation are different than the number of parameters listed during function definition. This should make it clear that parameters and arguments should be treated as two different entities.
</div>

```javascript
// Basic function with three parameters that logs the sum of all the parameters
function argCheck(paramter1, parameter2, parameter3){
  console.log(parameter1 + parameter2 + parameter3);
}

// Function with extra arguments
argCheck(1,2,3,4);
// Logs 6 (1 + 2 + 3, ignores 4)

// Function with missing arguments
argCheck(1,2);
// Logs NaN because by default if a corresponding argument is missing, it is set to undefined.
// parameter3 is assigned undefined and so 1+2+undefined = NaN

// Note that, no error is thrown
```

## COOKIES

a cute getCookie fun from <https://vanillajstoolkit.com/code-snippets/#dom-ready>

```javascript
document.cookie = 'sandwich=turkey; expires=Fri, 31 Dec 2024 23:59:59 GMT'

var getCookie = function (name) {
	var value = "; " + document.cookie;
	var parts = value.split("; " + name + "=");
	if (parts.length == 2) return parts.pop().split(";").shift();
};
```

# DOM / BROWSER SHIT

## get a list of available DOM APIs

```javascript
//document own properties
console.log(Object.keys(document).sort());

//document own properties & inherited properties
var documentPropertiesIncludeInherited = [];
for (var p in document) {
    documentPropertiesIncludeInherited.push(p);
}
console.log(documentPropertiesIncludeInherited.sort());

//documment inherited properties only
var documentPropertiesOnlyInherited = [];
for (var p in document) {
    if (!document.hasOwnProperty(p)) {
        documentPropertiesOnlyInherited.push(p);
    }
}
console.log(documentPropertiesOnlyInherited.sort());
```

# VOCAB

from <https://hacks.mozilla.org/2015/05/es6-in-depth-destructuring/>

Function parameter definitions
As developers, we can often expose more ergonomic APIs by *accepting a single
object with multiple properties as a parameter* instead of forcing our API
consumers to *remember the order of many individual parameters.*

We can *use destructuring to avoid repeating this single parameter object whenever we want
to reference one of its properties:*

```javascript
function removeBreakpoint({ url, line, column }) {
  // ...
}
```

```javascript
navigator.geolocation.getCurrentPosition(
```

typing the above into VSCode today I was pleasantly surprised to not have to Google it's signature because it was provided!

curious to how it fetched this, on hover + right click + go to definition, the user is whisked (it's v fast!) to the 17K-line long `/typescript/lib/lib.dom.d.ts`

et voilà the definition

```javascript
interface Geolocation {
  clearWatch(watchId: number): void;
  getCurrentPosition(successCallback: PositionCallback, errorCallback?: PositionErrorCallback, options?: PositionOptions): void;
  watchPosition(successCallback: PositionCallback, errorCallback?: PositionErrorCallback, options?: PositionOptions): number;
}
```

[here](https://github.com/Microsoft/TypeScript/blob/master/lib/lib.dom.d.ts) it is också

## return value syntax

```javascript
function rando(num) {
  var result = Math.floor(Math.random() * num)
  return result
}
```

var json = '{"result":true, "count":42}';
obj = JSON.parse(json);

console.log(obj.count);
// expected output: 42

console.log(obj.result);
// expected output: true
