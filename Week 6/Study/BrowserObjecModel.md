# Browser Object Model

## 102- What is BOM?

- Window object is the browser window.
- What can we do with window object?
  - Open window.
  - Close window.
  - Move window.
  - Resize window.
  - Print document.
  - Run code after period of time once or more.
  - Fully control the URL.
  - Save data inside browser to use later.

## 103- Alert, Confirm, Prompt

- Alert(Message):
  - Need No response, Only "ok" avaliable.
- Confirm(Message):
  - Need response and return a boolean.
- Prompt(Default message):
  - Collect data.

### JS

```js
alert("Test");
console.log("Test");

let confirmMsg = confirm("Are you sure?");

console.log(confirmMsg);

if (confirmMsg === true) {
	console.log("Deleted");
} else {
	console.log("Not deleted");
}

let promptMsg = prompt("Choose a day!", "Write day with 3 characters");
console.log(promptMsg);
```

## 104- setTimeout and clearTimeout

### HTML

```html
<button>Stop</button>
```

### JS

```js
setTimeout(function () {
	console.log("Message");
}, 2000);

setTimeout(sayMsg, 2000);
function sayMsg() {
	console.log("I am a message");
}

setTimeout(sayMsg, 2000, "Zeina", 21);
function sayMsg(user, age) {
	console.log(`I am a message for ${user}, Her age is ${age}.`);
}

let counter = setTimeout(sayMsg, 2000);
function sayMsg() {
	console.log(`I am a message`);
}
let btn = document.querySelector("button");
btn.onclick = function () {
	clearTimeout(counter);
};
```

## 105- setInterval and clearInterval

### HTML

```html
<div>5</div>
```

### JS

```js
setInterval(function () {
	console.log("Message");
}, 2000);

setInterval(sayMsg, 2000);
function sayMsg() {
	console.log("I am a message");
}

setInterval(sayMsg, 2000, "Zeina", 21);
function sayMsg(user, age) {
	console.log(`I am a message for ${user}, Her age is ${age}.`);
}

let div = document.querySelector("div");
function countDown() {
	div.innerHTML -= 1;
	if (div.innerHTML === "0") {
		clearInterval(counter);
	}
}
let counter = setTimeout(countDown, 1000);
```

### 106- Window Location Object

### HTML

```html
<div id="sec01">Section One</div>
<div id="sec02">Section Two</div>
<script src="main.js"></script>
```

### JS

```js
console.log(location);
console.log(location.href);

location.href = "https://google.com";
location.href = "/#sec02";

console.log(location.host);
console.log(location.hostname);

console.log(location.protocol);

console.log(location.hash);

window.reload();
window.replace();
window.assign();
```

## 107- Window Open and Close

### JS

```js
setTimeout(() => {
	window.open(
		"https://google.com",
		"_blank",
		"width=400, height=400, left=200, top=100"
	);
}, 2000);
```

## 108- Window History Object

### JS

```js
console.log(history);
console.log(history.length);
history.back();
history.forward();
history.go(-1);
```

## 109- Scroll, ScrollTo, ScrollBy, Focus, Print, Stop

### JS

```js
window.stop();
window.print();

let myNewWindow = window.open(
	"https://google.com",
	"",
	"width=400, height=400"
);
myNewWindow.focus();

window.scrollTo(500, 200);
window.scrollTo({
	left: 500,
	top: 200,
	behavior: "smooth",
});

window.scrollBy(500, 200);
```

## 110- Scroll to To using Y Practice

### HTML && CSS

```html
<head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>JavaScript</title>
	<style>
		body {
			height: 5000px;
			width: 5000px;
		}
		button {
			background-color: red;
			border: none;
			color: white;
			font-weight: bold;
			padding: 6px;
			border-radius: 4px;
			position: fixed;
			bottom: 20px;
			right: 20px;
			display: none;
			cursor: pointer;
		}
	</style>
</head>
<body>
	<button>Up</button>
	<script src="main.js"></script>
</body>
```

### JS

```js
let btn = document.querySelector("button");

window.onscroll = function () {
	if (window.scrollY >= 600) {
		btn.style.display = "block";
	} else {
		btn.style.display = "none";
	}
};

btn.onclick = function () {
	window.scrollTo({
		left: 0,
		top: 0,
		behavior: "smooth",
	});
};
```
