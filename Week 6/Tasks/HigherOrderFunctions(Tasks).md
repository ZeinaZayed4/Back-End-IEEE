## 1- With Map and Reduce

```js
let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let filtered = mix
	.map((ele) => (isNaN(parseInt(ele)) ? ele : ""))
	.reduce((acc, curr) => acc + curr);
console.log(filtered); // Elzero
```

## 2- With Filter

```js
let myString = "EElllzzzzzzzeroo";

let newString = myString
	.split("")
	.filter((char, index, array) => array.indexOf(char) === index)
	.join("");
console.log(newString); // Elzero
```

## 3- Wuth Reduce

```js
let myArray = ["E", "l", "z", ["e", "r"], "o"];

let newArray = myArray.reduce((acc, curr) => acc + curr).replace(",", "");
console.log(newArray); // Elzero
```

## 4- With Map and Filter

```js
let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let nums = numsAndStrings
	.filter((ele) => !isNaN(parseInt(ele)))
	.map((ele) => -ele);
console.log(nums); // [-1, -10, 10, 20, -5, -3]
```

## 5- With Reduce

```js
let nums = [2, 12, 11, 5, 10, 1, 99];

let newNums = nums.reduce((acc, curr) =>
	curr % 2 != 0 ? acc + curr : acc * curr
);
console.log(newNums); // 500
```
