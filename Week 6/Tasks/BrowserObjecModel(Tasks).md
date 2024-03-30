# 1

## JS

```js
let num1, num2;
let num = window.prompt("Print Number From To ", "Example: 5-20");

num = num.split("-").sort();

num1 = +num[0].trim();
num2 = num[1].trim();
for (let i = num1; i <= num2; i++) {
	let div = document.createElement("div");
	document.body.append(div);
	div.innerHTML = i;
}
```

# 2

```js
function pop() {
	let div = document.createElement("div");
	let h1 = document.createElement("h1");
	h1.textContent = "Welcome";

	let p = document.createElement("p");
	p.textContent = "Welcome to Elzero Web School";

	document.body.appendChild(div);
	div.append(p);
	div.prepend(h1);

	let btn = document.createElement("button");
	btn.innerHTML = "x";
	btn.style.cssText = `position: absolute;
    width: 30px;
    height: 30px;
    border: none;
    right: -5px;
    top: -5px;
    background-color: red;
    color:white;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    cursor: pointer;
    border-radius: 50%`;

	div.style.cssText = `text-align: center;
    background-color: #f5f3f4;
    padding: 20px;
    margin-left: 25%;
    margin-right: 25%;
    margin-top: 25%;
    border-radius: 2px;
    position: relative;
    `;
	div.append(btn);
	btn.onclick = function () {
		div.remove();
	};
}
setTimeout(pop, 1000);
```

# 3

## HTML

```html
<div></div>
```

## JS

```js
let div = document.querySelector("div");
function countDown() {
	div.innerHTML -= 1;
	if (div.innerHTML === "0") {
		clearInterval(counter);
	}
}
let counter = setInterval(countDown, 1000);
```

# 4

## JS

```js
let div = document.querySelector("div");
function countDown() {
	div.innerHTML -= 1;
	if (div.innerHTML === "0") {
		location.href = "https://google.com";
	}
}
let counter = setInterval(countDown, 1000);
```

# 5

```js
let div = document.querySelector("div");
function countDown() {
	div.innerHTML -= 1;
	if (div.innerHTML === "5") {
		window.open("https://elzero.org", "_blank", "height: 400, width: 400");
	}
	if (div.innerHTML === "0") {
		clearInterval(counter);
	}
}
let counter = setInterval(countDown, 1000);
```
