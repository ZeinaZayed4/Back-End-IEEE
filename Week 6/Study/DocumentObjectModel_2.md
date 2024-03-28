# (94:101) Document Object Model_2

## 94- Event Samulation - Click, Focus, Blur

### HTML

```html
<form action="">
	<input class="one" type="text" />
	<input class="two" type="text" />
	<input type="submit" value="Submit Data" />
</form>
<a href="https://google.com" target="_blank">Goo gle</a>
```

### JS

```js
let one = document.querySelector(".one");
let two = document.querySelector(".two");

window.onload = function () {
	two.focus();
};

one.onblur = function () {
	document.links[0].click();
};
```

## 95- Class List Object and Methods

### HTML

```html
<div id="my-div" class="one two show test">Div with many classes</div>
```

### JS

```js
let element = document.getElementById("my-div");

console.log(element.classList);
console.log(typeof element.classList);

console.log(element.classList.contains("osama"));
console.log(element.classList.contains("show"));

console.log(element.classList.item("2"));

element.onclick = function () {
	element.classList.add("add-one", "add-two");
};

element.onclick = function () {
	element.classList.remove("one", "two");
};

element.onclick = function () {
	element.classList.toggle("show");
};
```

## 96- CSS Styling and Stylesheets

### HTML

```html
<div id="my-div">Div with many classes</div>
```

### CSS

```css
div {
	font-size: 30px;
	line-height: 2;
}
```

### JS

```js
let element = document.getElementById("my-div");

element.style.color = "red";
element.style.fontWeight = "bold";

element.style.cssText = "font-weight: bold; color: blue; opacity: 0.9";

element.style.removeProperty("color");
element.style.setProperty("font-size", "40px", "important");

document.styleSheets[0].cssRules[0].style.removeProperty("line-height");
document.styleSheets[0].cssRules[0].style.setProperty("color", "green");
```

## 97-Before, After, Prepend, Append, Remove

### HTML

```html
<div id="my-div">Div has <span>span</span></div>
<script src="main.js"></script>
```

### JS

```js
let element = document.querySelector("#my-div");
let createdP = document.createElement("p");

element.before("Hello from JS");
element.after("Welcome!");
element.before(createdP);

element.append(", Learn JS");
element.prepend("Learn HTML, CSS, ");

element.remove();
```

## 98- DOM Traversing

### HTML

```html
<div id="my-div">
	<span class="one">One</span>
	<!-- Comment -->
	<span class="two">Two</span>
	<!-- Comment -->
	<span class="three">Three</span>
</div>
<script src="main.js"></script>
```

### JS

```js
let span = document.querySelector(".two");

console.log(span.nextSibling);
console.log(span.nextElementSibling);

console.log(span.previousSibling);
console.log(span.previousElementSibling);

console.log(span.parentElement);
span.onclick = function () {
	span.parentElement.style.opacity = "0";
};
```

## 99- DOM Cloning

### HTML

```html
<p id="my-p" class="my-p">This is <span>P</span></p>
<div>Div</div>
```

### JS

```js
let myP = document.querySelector("p").cloneNode(true);
let myDiv = document.querySelector("div");

myP.id = `${myP.id}-cloned`;

myDiv.appendChild(myP);
```

## 100- AddEventListener

### HTML

```html
<p>Clone me</p>
```

### JS

```js
let myP = document.querySelector("p");

myP.onclick = two;

function one() {
	console.log("Message from onclick 1");
}

function two() {
	console.log("Message from onclick 2");
}

myP.addEventListener("click", function () {
	console.log("Message from event 1");
});

myP.addEventListener("click", one);
myP.addEventListener("click", two);

// myP.addEventListener("click", "string"); // error

myP.onclick = function () {
	let newP = myP.cloneNode(true);
	newP.className = "clone";
	document.body.appendChild(newP);
};

// let cloned = document.querySelector(".clone");
// cloned.onclick = function () {
// 	console.log("I am cloned");
// };

document.addEventListener("click", function (event) {
	if (event.target.className === "clone") {
		console.log("I am cloned");
	}
});
```

## 101- DOM Challenge

### JS

```js
document.body.style.fontFamily = "Arial";

let header = document.createElement("header");
let logoDiv = document.createElement("div");

logoDiv.appendChild(document.createTextNode("Elzero"));
logoDiv.style.color = "#23a96e";

let ulDiv = document.createElement("div");
let ul = document.createElement("ul");
let liA = document.createElement("li");
let liC = document.createElement("li");
let liH = document.createElement("li");
let liS = document.createElement("li");

ulDiv.appendChild(ul);
liA.appendChild(document.createTextNode("About"));
liC.appendChild(document.createTextNode("Contact"));
liH.appendChild(document.createTextNode("Home"));
liS.appendChild(document.createTextNode("Service"));

ul.appendChild(liA);
ul.appendChild(liC);
ul.appendChild(liH);
ul.appendChild(liS);

header.prepend(logoDiv);
header.appendChild(ulDiv);
document.body.appendChild(header);

header.style.cssText = `display: flex; justify-content: space-between; align-items: center; padding-left: 5px;
font-size: 20px`;

ul.style.cssText = `display: flex; justify-content: space-around; list-style: none;`;

document.querySelectorAll("li").forEach(function (e) {
	e.style.cssText =
		"padding-left: 5px; padding-right: 5px; color: #aaa; font-size: 15px";
});

let content = document.createElement("div");
content.className = "container";
document.body.appendChild(content);
content.style.cssText = `display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: repeat(5, 1fr);
gap: 5px;
text-align: center;
background-color: #ececec;
padding: 10px;`;

for (let i = 1; i < 16; i++) {
	let div = document.createElement("div");
	div.className = `div-${i}`;
	let p1 = document.createElement("p");
	let p2 = document.createElement("p");
	p1.appendChild(document.createTextNode(`${i}`));
	p2.appendChild(document.createTextNode(`product`));
	div.appendChild(p1);
	div.appendChild(p2);
	div.style.cssText = `background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;`;
	content.appendChild(div);
	p1.style.cssText = `font-weight: bold;
    font-size: 23px;
    margin: 0;
    margin-top: 5px;`;
	p2.style.cssText = `margin-top: 5px;`;
}

let footer = document.createElement("footer");
let div = document.createElement("div");
div.appendChild(document.createTextNode("Copyright 2024"));

footer.appendChild(div);
document.body.appendChild(footer);

footer.style.cssText = `display: flex;
justify-content: center;
align-items: center;
background-color: #23a96e;
padding: 10px;
color: white;`;
```
