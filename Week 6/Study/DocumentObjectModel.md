# (86:93) Document Object Model

## 86- What is DOM and Select Elements

### HTML

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>JavaScript</title>
	</head>
	<body>
		<span class="my-span special">My Span 1</span>
		<span class="my-span">My Span 2</span>
		<p>Hello paragrah 1</p>
		<p>Hello paragrah 2</p>
		<div id="my-div">Hello div</div>
		<form>
			<input type="text" name="one" value="Hello" />
		</form>
		<form>
			<input type="text" name="two" value="Hello" />
		</form>
		<a href="https://google.com">Google</a>
		<a href="https://facebook.com">Facebook</a>
		<script src="main.js"></script>
	</body>
</html>
```

### JS

```js
let myIdElement = document.getElementById("my-div");
console.log(myIdElement);

let myTagELements = document.getElementsByTagName("p");
console.log(myTagELements[1]);

let myClassElement = document.getElementsByClassName("my-span");
console.log(myClassElement);

let myQueryElement = document.querySelector(".special");
console.log(myQueryElement);

let myQueryElements = document.querySelectorAll(".my-span");
console.log(myQueryElements);

console.log(document.title);
console.log(document.body);
console.log(document.forms[0].one);
console.log(document.forms[0].one.value);
console.log(document.links[1]);
console.log(document.links[1].href);
```

## 87- Get Set Elements Content and Attributes

### HTML

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>JavaScript</title>
	</head>
	<body>
		<div class="js">
			JavaScript
			<span>Div</span>
			&lt;span&gt;
		</div>
		<img src="" alt="" />
		<a class="link" href="#">Google</a>
		<script src="main.js"></script>
	</body>
</html>
```

### JS

```js
let myELement = document.querySelector(".js");

console.log(myELement.innerHTML);
console.log(myELement.textContent);

myELement.innerHTML = "Text from <span>main.js</span> file";
myELement.textContent = "Text from <span>main.js</span> file";

document.images[0].src = "https://facebook.com";
document.images[0].alt = "Alternate";
document.images[0].title = "Picture";
document.images[0].id = "pic";
document.images[0].className = "img";

myLink = document.querySelector(".link");

console.log(myLink.getAttribute("class"));
console.log(myLink.getAttribute("href"));

myLink.setAttribute("href", "https://google.com");
myLink.setAttribute("title", "Google");
```

## 88- Check Attributes and Examples

### JS

```js
console.log(document.getElementsByTagName("p")[0].attributes);

let myP = document.getElementsByTagName("p")[0];

if (myP.hasAttribute("data-src")) {
	if (myP.getAttribute("data-src") === "") {
		myP.removeAttribute("data-src");
	} else {
		myP.setAttribute("data-src", "New Value");
	}
} else {
	console.log(`Not Found`);
}

if (myP.hasAttributes()) {
	console.log("Has attributes");
}
```

## 89- Create and Append Elements

### JS

```js
let myElement = document.createElement("div");
let myAttribute = document.createAttribute("data-custom");
let myText = document.createTextNode("Product one");
let myComment = document.createComment("This is a div");

myElement.className = "product";
myElement.setAttributeNode(myAttribute);
myElement.setAttribute("data-testing", "Testing");

myElement.appendChild(myComment);

// Append text to element
myElement.appendChild(myText);

// Append element to body
document.body.appendChild(myElement);
```

## 90- Product with Title and Description Practice

### JS

```js
let myMainElement = document.createElement("div");
let myHeading = document.createElement("h1");
let myParagraph = document.createElement("p");

let myHeadingText = document.createTextNode("Product Title");
let myParagraphText = document.createTextNode("Product description");

// Add text to title
myHeading.appendChild(myHeadingText);

// Add text to paragraph
myParagraph.appendChild(myParagraphText);

// Add title and paragraph to div
myMainElement.appendChild(myHeading);
myMainElement.appendChild(myParagraph);

document.body.appendChild(myMainElement);
```

## 91- Deal with Childrens

### JS

```js
let myEelement = document.querySelector("div");

console.log(myEelement);
console.log(myEelement.children);
console.log(myEelement.children[0]);
console.log(myEelement.childNodes);

console.log(myEelement.firstChild);
console.log(myEelement.lastChild);

console.log(myEelement.firstElementChild);
console.log(myEelement.lastElementChild);
```

## 92- DOM Events

### HTML

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>JavaScript</title>
		<style>
			body {
				height: 4000px;
			}
		</style>
	</head>
	<body>
		<button id="btn">Button</button>
		<hr />
		<form action="">
			<input type="text" />
			<input type="submit" value="Submit data" />
		</form>
		<script src="main.js"></script>
	</body>
</html>
```

### JS

```js
let myBtn = document.getElementById("btn");
myBtn.onclick = function () {
	console.log("Click");
};

myBtn.oncontextmenu = function () {
	console.log("Context menu");
};

window.onscroll = function () {
	console.log("Scroll");
};
```

## 93- Validate Form and Prevent Default

### HTML

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>JavaScript</title>
		<style>
			body {
				height: 4000px;
			}
		</style>
	</head>
	<body>
		<form action="">
			<input type="text" name="username" placeholder="Max 10 Cahrs Only" />
			<input type="text" name="age" placeholder="Can't be empty" />
			<input type="submit" value="Submit data" />
		</form>
		<a href="https://google.com">Google</a>
		<script src="main.js"></script>
	</body>
</html>
```

### JS

```js
let userInput = document.querySelector("[name='username']");
let ageInput = document.querySelector("[name='age']");

document.forms[0].onsubmit = function (event) {
	let userValid = false;
	let ageValid = false;

	console.log(userInput.value);
	console.log(userInput.value.length);

	if (userInput.value !== "" && userInput.value.length <= 10) {
		userValid = true;
	}

	if (ageInput.value !== "") {
		userValid = true;
	}

	if (userValid === false || ageValid === false) {
		event.preventDefault();
	}
};

document.links[0].onmouseenter = function (event) {
	console.log(event);
	event.preventDefault();
};
```
