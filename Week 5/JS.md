## Comment Your JS Code

- Comments:

  - are lines of code that JS will ignore.
  - Just used to create notes
    for yourself and others about what the code does.

  ```JS
  // in-line comment
  /* Multiple
  line
  comment
  */
  ```

## Data Types and Variables

- 7 different data types in JS:
  - Undefined.
  - Null.
  - Boolean: true or false.
  - String.
  - Symbol: immutable values that is unique.
  - Number.
  - Object: can store a lot of different key value pairs.
- Variable and function names in JS ara case senseitive.

### Three Ways to Declare a Variable in JS

```js
// using var:
var firstName = "Zeina";
console.log("My first name is:", firstName);
// using let:
let lastName = "Zayed";
console.log("My last name is:", lastName);
//using const:
const pi = 3.14;
console.log("pi =", pi);
```

## Storing Values with Assignment Operator

```js
// declaring variables
var a;
console.log(a); // undefined
// declaring and assigning variables
var b = 4;
console.log(b); // 4
// assigning
a = 8;
b = a;
console.log(a); // 8
console.log(b); // 8
```

## Numbers

```js
// arithmetic operations
var sum = 4 + 2;
var sub = 4 - 2;
var mul = 2 * 4;
var div = 8 / 4;
var remainder = 20 % 8;

// incrementing and decrementing numbers
var num = 8;
num++;
console.log(num); // 9
num--;
console.log(num); // 8
num += 12;
console.log(num); // 20
num -= 10;
console.log(num); // 10
num *= 2;
console.log(num); // 20
num /= 2;
console.log(num); // 10
```

## String Variables

```js
var firstName = "Zeina";
var lastName = "Zayed";
console.log(firstName, lastName);
```

#### - Escaping Literal Quotes in Strings

```js
var str = 'I am a "doubel quoted" string inside "double quotes"';
console.log(str);
```

#### - Escape Sequence in String

- \\' => single quote
- \\" => double quote
- \\\ => backslach
- \\n => new line
- \\r => carriage return
- \\t => tab
- \\b => backspace
- \\f => form feed

#### - Concatenating Strings

```js
// with +
var str = "I come first. " + "I come second";
console.log(str);
// with +=
var newStr = "I come first";
newStr += "I come second";
console.log(newStr);
```

#### - Constructing Strings with Variables

```js
var myName = "Zeina Zayed";
var myStr = "Hello, My name is: " + myName + ", How are you?";
console.log(myStr);
```

#### - Find Length of String

```js
var name = "Zeina Zayed";
var nameLength = name.length;
console.log(nameLength); // 11

// index
firstLetterOfName = name[0];
console.log(firstLetterOfName); // Z
```

#### - String Immutability

- Individual characters of string literal can't be changed.

## Arrays

```js
var arr = ["Zeina", 4];
// nested array
var newArr = [
	["Welcome ", "to"],
	["little", "prince's world!"],
];
console.log(newArr);
```

#### - Access Array Data with Indexes

```js
var myArray = [40, 20, 60];
console.log(myArray[0]); // 40
```

#### - Modify Array Data with Indexes

```js
var myArray = [40, 20, 60];
myArray[0] = 80;
console.log(myArray);
```

#### - Access Multi-Dimensional Array with Indexes

```js
var myArray = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
];
var myData = myArray[0][1];
console.log(myData); // 2
```

#### - Manipulate Array with push()

- adds element at the end of the array

```js
var myArray = [
	["Zeina", 4],
	["Cat", 2],
];
myArray.push(["Welcome", "here"]);
console.log(myArray);
```

#### - Manipulate Array with pop()

- removes the last element from the array

```js
var myArray = [
	["Zeina", 4],
	["Cat", 2],
	["Welcome", "here"],
];
removedElement = myArray.pop();
console.log(removedElement);
```

#### - Manipulate Array with shift()

- removes the first element from the array

```js
var myArray = [
	["Zeina", 4],
	["Cat", 2],
	["Welcome", "here"],
];
removedElement = myArray.shift();
console.log(removedElement);
```

#### - Manipulate Array with unshift()

- adds element at the beginning of the array

```js
var myArray = [
	["Cat", 2],
	["Welcome", "here"],
];
myArray.unshift(["Zeina", 4]);
console.log(myArray);
```

## Functions

```js
function reusableFunction() {
	console.log("Hello World!");
}

reusableFunction(); // Hello World!
```

#### - Passing Values to Function With Arguments

```js
function sum(x, y) {
	console.log(x + y);
}

sum(2, 4); // 6
```

#### - Global VS Local in Functions

```js
// Global
var outerWear = "T-Shirt";
function outfit() {
	return outerWear;
}
console.log(outfit()); // T-Shirt

// After using local
var outerWear = "T-Shirt";
function outfit() {
	var outerWear = "Sweater";
	return outerWear;
}
console.log(outfit()); // Sweater
console.log(outerWear); // T-Shirt
```

#### - Return a Value Form a Function With Return

```js
function timesFive(num) {
	return num * 5;
}

console.log(timesFive(10)); // 50
```

#### - Understanding Undefined Value Returned From a Function

```js
var sum = 0;
function addThree() {
	sum += 3;
}
addThree();
console.log(sum); // 3
```

#### -Assignment With a Returned Value
