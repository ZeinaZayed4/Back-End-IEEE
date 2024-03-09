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

#### - Assignment With a Returned Value

```js
var changed = 0;
function change(num) {
	return (num + 5) / 5;
}
changed = change(10);

console.log(changed);
```

#### - Stand in Line

- Queue is an abstract data structure where items are kept in order.

```js
function nextInLine(arr, item) {
	arr.push(item);
	return arr.shift();
}

var testArr = [1, 2, 3, 4, 5];
console.log("Before:", JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After:", JSON.stringify(testArr));
```

## Boolean Values

```js
function welcomeToBooleans() {
	return false;
}
```

## Use Conditional Logic with If Statements

```js
function trueOrFalse(isItTrue) {
	if (isItTrue) {
		return "Yes, it's true";
	}
	return "No, it's false";
}
console.log(trueOrFalse(true));
```

## Comparison with the Equality Operator

```js
function testEqual(val) {
	if (val == 10) {
		return "Equal";
	}
	return "Not equal";
}
console.log(testEqual(10));
```

## Comparison with the Strict Equality Operator

```js
function testStrict(val) {
	if (val === 10) {
		return "Equal";
	}
	return "Not equal";
}
console.log(testStrict("10"));
```

## Comparison with the Greater Than Operator

```js
function testGreaterThan(val) {
	if (val > 100) {
		return "Over 100";
	} else if (val > 10) {
		return "Over 10";
	}
	return "10 or Under";
}

console.log(testGreaterThan(10));
```

## Comparison with the Logical And Operator

```js
function testLogicalAnd(val) {
	if (val <= 50 && val >= 25) {
		return "Yes";
	}
	return "No";
}
console.log(testLogicalAnd(10));
```

## Comparison with the Logical Or Operator

```js
function testLogicalOr(val) {
	if (val > 20 || val < 10) {
		return "Outside";
	}
	return "Inside";
}
console.log(testLogicalOr(15));
```

## Else Statement

```js
function testElse(val) {
	var result = "";
	if (val > 5) {
		result = "Bigger than 5";
	} else {
		result = "5 or smaller";
	}
	return result;
}
console.log(testElse(15));
```

## Else If Statements

```js
function testElseIf(val) {
	if (val > 10) {
		return "Greater than 10";
	} else if (val < 5) {
		return "Smaller than 5";
	} else {
		return "Between 5 and 10";
		s;
	}
}
console.log(testElseIf(15));
```

## Golf Code

```js
var names = [
	"Hole-in-one!",
	"Eagle",
	"Birdie",
	"Par",
	"Bogey",
	"Double Bogey",
	"GO Home!",
];
function golfScoer(par, strokes) {
	if (strokes == 1) {
		return names[0];
	} else if (strokes <= par - 2) {
		return names[1];
	} else if (strokes == par - 1) {
		return names[2];
	} else if (strokes == par) {
		return names[3];
	} else if (strokes == par + 1) {
		return names[4];
	} else if (strokes == par + 2) {
		return names[5];
	} else if (strokes >= par + 3) {
		return names[6];
	}
}
console.log(golfScoer(5, 4));
```

## Switch Statements and Default

```js
function caseInSwitch(val) {
	var answer = "";
	switch (val) {
		case 1:
			answer = "alpha";
			break;
		case 2:
			answer = "beta";
			break;
		case 3:
			answer = "gamma";
			break;
		case 4:
			answer = "delta";
			break;
		default:
			answer = "other";
			break;
	}
	return answer;
}
console.log(caseInSwitch(5));
```

## Returning Early Pattern from Functions

```js
function abTest(a, b) {
	if (a < 0 || b < 0) {
		return undefined;
	}
	return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
console.log(abTest(4, 2));
```

## Build JS Objects

```js
var ourDog = {
	name: "Camper",
	legs: 4,
	tails: 1,
	friends: ["everything!"],
};
```
