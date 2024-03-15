# (71:78) Higher Order Functions:

- is a function that accepts functions as parameters and/or returns a function.

## 71- Higher Order Function - Map

- Map:

  - Method creates a new array.
  - Populated with the results of calling a provided function on every element in a calling array.
  - returns a new array.

- Examples:

  ```js
  let myNums = [1, 2, 3, 4, 5, 6];
  let newArray = [];
  for (let i = 0; i < myNums.length; i++) {
  	newArray.push(myNums[i] + myNums[i]);
  }
  console.log(newArray);

  // Same idea with Map
  let addSelf = myNums.map((element) => element + element);
  console.log(addSelf);

  function addition(element) {
  	return element + element;
  }
  let add = myNums.map(addition);
  console.log(add);
  ```

## 72- Higher Order Functions - Map practice

```js
let swappingCases = "elZERo";
let invertedNumbers = [1, -10, -20, 15, 100, -30];
let ignoreNumbers = "Elz123er4o";

let sw = swappingCases
	.split("")
	.map((element) =>
		element === element.toUpperCase()
			? element.toLowerCase()
			: element.toUpperCase()
	)
	.join("");
console.log(sw);

let inv = invertedNumbers.map((element) => -element);
console.log(inv);

let ign = ignoreNumbers
	.split("")
	.map((element) => (isNaN(parseInt(element)) ? element : ""))
	.join("");
console.log(ign);
```

## 73- Higher Order Functions - Filter

- Methods creates a new array.

```js
// Get Friends With Name Starts With A
let friends = ["Ahmed", "Sameh", "Sayed", "Asmaa", "Amgad", "Israa"];

let filteredFriends = friends.filter((el) => el.startsWith("A"));
console.log(filteredFriends);

// Get Even Numbers Only
let numbers = [11, 20, 2, 5, 17, 10];

let evenNumbers = numbers.filter((el) => el % 2 === 0);
console.log(evenNumbers);
```

## 74- Higher Order Functions - Filter Practice

```js
// Filter Words More Than 4 Characters
let sentence = "I Love Foood Code Too Playing Much";

let filteredSentence = sentence
	.split(" ")
	.filter((el) => el.length <= 4)
	.join(" ");
console.log(filteredSentence);

// Ignore Numbers
let ignoreNumbers = "Elz123er4o";
let ign = ignoreNumbers
	.split("")
	.filter(function (ele) {
		return isNaN(parseInt(ele));
	})
	.join("");
console.log(ign);

// Filter Strings + Multiply
let mix = "A13BS2ZX";
let mul = mix
	.split("")
	.filter((el) => !isNaN(parseInt(el)))
	.map((el) => el * el)
	.join("");
console.log(mul);
```

## 75- Higher Order Functions - Reduce

- method executes a reducer function on each element of the array.
- resulting in a single output value.

```js
let nums = [10, 20, 15, 30];
let add = nums.reduce(function (acc, current, index, arr) {
	return acc + current;
}, 5);
console.log(add);
```

## 76- Higher Order Functions - Reduce Practice

```js
let theBiggest = [
	"Bla",
	"Propaganda",
	"Other",
	"AAA",
	"Battery",
	"Test",
	"Propaganda_Two",
];
let check = theBiggest.reduce(function (acc, curr) {
	return acc.length > curr.length ? acc : curr;
});
console.log(check);

let removeChars = ["E", "@", "@", "L", "Z", "@", "@", "E", "R", "@", "O"];
let finalString = removeChars
	.filter((ele) => ele !== "@")
	.reduce((acc, curr) => acc + curr);
console.log(finalString);
```

## 77- Higher Order Functions - Foreach and Practice

- method executes a provided function once for each array element.
- Doesn't return anything [Undefined].
- Break will not break the loop.

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>JavaScript</title>
	</head>
	<body>
		<ul>
			<li class="active">One</li>
			<li>Two</li>
			<li>Three</li>
		</ul>
		<div class="content">
			<div>Div One</div>
			<div>Div Two</div>
			<div>Div Three</div>
		</div>
		<script src="main.js"></script>
	</body>
</html>
```

```js
let allLis = document.querySelectorAll("ul li");
let allDivs = document.querySelectorAll(".content div");

allLis.forEach(function (ele) {
	ele.onclick = function () {
		allLis.forEach(function (ele) {
			ele.classList.remove("active");
		});
		this.classList.add("active");
		allDivs.forEach(function (ele) {
			ele.style.display = "none";
		});
	};
});
```

## 78- Higher Order Functions - Challenge

```js
let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

let solution = myString
	.split(",")
	.filter((ele) => isNaN(parseInt(ele)))
	.map((i) => i.replace("_", " "))
	.reduce((acc, curr) => acc + curr)
	.slice(true, -true);
console.log(solution); // Elzero Web School
```
