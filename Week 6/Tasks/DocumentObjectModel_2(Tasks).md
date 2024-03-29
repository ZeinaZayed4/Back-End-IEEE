# 1

## HTML && JS

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<title>Learn JavaScript</title>
		<script>
			window.onload = function () {
				let links = document.querySelectorAll("a");
				for (link of links) {
					if (
						link.classList.contains("open") &&
						link.textContent === "Elzero"
					) {
						link.click();
					}
				}
			};
		</script>
	</head>
	<body>
		<a class="open" href="https://google.com">Google</a>
		<a class="open" href="https://elzero.org">Elzero</a>
		<a class="not" href="https://facebook.com">Facebook</a>
		<a class="linked" href="https://linkedin.com">Elzero</a>
	</body>
</html>
```

## 2

## HTML && CSS

```html

```

## JS

```js

```

# 3

## HTML

```html
<body>
	<div class="our-element">Our Element</div>
	<p>Paragraph</p>
	<script src="main.js"></script>
</body>
```

## JS

```js
let element = document.querySelector(".our-element");
let removedP = document.querySelector("p");
let startElement = document.createElement("div");
let endElement = document.createElement("div");

element.before(startElement);
startElement.classList.add("start");
startElement.title = "Start Element";
startElement.setAttribute("data-value", "Start");
startElement.textContent = "Start";

element.after(endElement);
endElement.classList.add("end");
endElement.classList.add("end");
endElement.title = "End Element";
endElement.setAttribute("data-value", "End");
endElement.textContent = "End";

removedP.remove();
```

# 4

## HTML

```html
<body>
	<div>
		<span>Hello</span>
		<!-- We Need The Next Text Without Spaces -->
		Elzero
	</div>
	<script src="main.js"></script>
</body>
```

## JS

```js
let div = document.querySelector("div");
console.log(div.childNodes[4].data.trim());
```

# 5

## HTML

```html
<body>
	<div>Element</div>
	<span>Element</span>
	<p>Element</p>
	<article>Element</article>
	<section>Element</section>
	<script src="main.js"></script>
</body>
```

## JS

```js
let div = document.querySelector("div");
let span = document.querySelector("span");
let p = document.querySelector("p");
let article = document.querySelector("article");
let section = document.querySelector("section");

div.addEventListener("click", function () {
	console.log(div.nodeName);
});
span.addEventListener("click", function () {
	console.log(span.nodeName);
});
p.addEventListener("click", function () {
	console.log(p.nodeName);
});
article.addEventListener("click", function () {
	console.log(article.nodeName);
});
section.addEventListener("click", function () {
	console.log(section.nodeName);
});
```
