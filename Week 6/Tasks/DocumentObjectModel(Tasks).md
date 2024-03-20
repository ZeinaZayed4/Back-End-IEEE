# Document Object Model (Tasks)

## 1

### HTML

```html
<div id="elzero" class="element" name="js">JavaScript</div>
```

### JS

```js
console.log(document.getElementById("elzero")); // 1
console.log(document.getElementsByClassName("element")[0]); // 2
console.log(document.getElementsByName("js")[0]); // 3
console.log(document.getElementsByTagName("div")[0]); // 4

console.log(document.querySelector("div")); // 5
console.log(document.querySelector("[id='elzero']")); // 6
console.log(document.querySelector("[class='element']")); // 7
console.log(document.querySelector("[name='js']")); // 8

console.log(document.querySelectorAll("div")[0]); // 9
console.log(document.querySelectorAll("[id='elzero']")[0]); // 10
console.log(document.querySelectorAll("[class='element']")[0]); // 11
console.log(document.querySelectorAll("[name='js']")[0]); // 12
```

## 2

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
		<div>
			<img decoding="async" src="#" alt="" />
		</div>
		<div>
			<img decoding="async" src="#" alt="" />
		</div>
		<div>
			<img decoding="async" src="#" alt="" />
		</div>
		<div>
			<img decoding="async" src="#" alt="" />
		</div>
		<div>
			<img decoding="async" src="#" alt="" />
		</div>
		<div>
			<img decoding="async" src="#" alt="" />
		</div>
		<div>
			<img decoding="async" src="#" alt="" />
		</div>
		<div>
			<img decoding="async" src="#" alt="" />
		</div>
		<div>
			<img decoding="async" src="#" alt="" />
		</div>
		<div>
			<img decoding="async" src="#" alt="" />
		</div>
		<script src="main.js"></script>
	</body>
</html>
```

### JS

```js
myImages = document.querySelectorAll("img");

myImages.forEach(function (img) {
	(img.src = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png"),
		(img.alt = "Elzero Logo");
});
console.log(myImages[0]);
```
