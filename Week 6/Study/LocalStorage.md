# (111-114) Local Storage

## 111- Local Storage

### JS

```js
// Set
window.localStorage.setItem("color", "red");
window.localStorage.fontWeight = "bold";
window.localStorage["fontSize"] = "20px";

// Get
console.log(window.localStorage.getItem("color"));
console.log(window.localStorage.fontWeight);
console.log(window.localStorage["fontSize"]);

// Set color in page
document.body.style.backgroundColor = window.localStorage.color;

// Get key
console.log(window.localStorage.key(0));

// Remove one
window.localStorage.removeItem("color");

// Clear all
window.localStorage.clear();

console.log(window.localStorage);
console.log(typeof window.localStorage);
```

## 112- Local Storage Color Application Practice

### HTML

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Learn JavaScript</title>
		<link rel="stylesheet" href="main.css" />
		<style>
			body {
				background-color: #eee;
			}
			ul {
				padding: 0;
				margin: 0;
				background-color: #ddd;
				margin: 20px auto;
				padding: 20px;
				width: 400px;
				list-style: none;
				display: flex;
				justify-content: space-between;
			}
			ul li {
				width: 60px;
				height: 60px;
				border: 2px solid transparent;
				opacity: 0.4;
				cursor: pointer;
				transition: 0.3s;
			}
			ul li.active,
			ul li:hover {
				opacity: 1;
			}
			ul li:first-child {
				background-color: red;
			}
			ul li:nth-child(2) {
				background-color: green;
			}
			ul li:nth-child(3) {
				background-color: blue;
			}
			ul li:nth-child(4) {
				background-color: black;
			}
			.experiment {
				background-color: red;
				width: 600px;
				height: 300px;
				margin: 20px auto;
			}
		</style>
	</head>
	<body>
		<ul>
			<li class="active" data-color="red"></li>
			<li data-color="green"></li>
			<li data-color="blue"></li>
			<li data-color="black"></li>
		</ul>
		<div class="experiment"></div>
		<script src="main.js"></script>
	</body>
</html>
```

### JS

```js
let lis = document.querySelectorAll("ul li");
let div = document.querySelector("div");

if (window.localStorage.getItem("color")) {
	// Add color to div
	div.style.backgroundColor = window.localStorage.getItem("color");
	// Remove active class from lis
	lis.forEach((li) => {
		li.classList.remove("active");
	});
	// Add active class to current color
	document
		.querySelector(`[data-color="${window.localStorage.getItem("color")}"]`)
		.classList.add("active");
} else {
	console.log("No");
}

lis.forEach((li) => {
	li.addEventListener("click", (e) => {
		// console.log(e.currentTarget.dataset.color);
		// Remove active class from lis
		lis.forEach((li) => {
			li.classList.remove("active");
		});
		// Add active class to current element
		e.currentTarget.classList.add("active");
		// Add current color to localStorage
		window.localStorage.setItem("color", e.currentTarget.dataset.color);
		// Change div background-color
		div.style.backgroundColor = e.currentTarget.dataset.color;
	});
});
```

## 113- Session Storage and Use Cases

### HTML

```html
<form action="">
	<input type="text" class="name" />
</form>
<script src="main.js"></script>
```

### JS

```js
window.localStorage.setItem("color", "red");
window.sessionStorage.setItem("color", "blue");

document.querySelector(".name").onblur = function () {
	// console.log(this.value);
	window.localStorage.setItem("input-name", this.value);
};
```

## 114- BOM Challenge

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
				font-family: Arial, Helvetica, sans-serif;
			}
			.container {
				width: 500px;
				margin: 20px auto;
			}
			.form {
				background-color: #eee;
				border-radius: 6px;
				padding: 20px;
				display: flex;
				align-items: center;
			}
			.input {
				padding: 10px;
				border: 1px solid #ddd;
				border-radius: 6px;
				flex: 1;
			}
			.input:focus {
				outline: none;
			}
			.add {
				border: none;
				background-color: #f44336;
				color: white;
				padding: 10px;
				border-radius: 6px;
				margin-left: 10px;
				cursor: pointer;
			}
			.tasks {
				background-color: #eee;
				margin-top: 20px;
				border-radius: 6px;
				padding: 20px;
			}
			.tasks .task {
				background-color: white;
				padding: 10px;
				border-radius: 6px;
				display: flex;
				justify-content: space-between;
				align-items: center;
				transition: 0.3s;
				cursor: pointer;
				border: 1px solid #ccc;
			}
			.tasks .task:not(:last-child) {
				margin-bottom: 15px;
			}
			.tasks .task:hover {
				background-color: #f7f7f7;
			}
			.tasks .task.done {
				opacity: 0.5;
			}
			.tasks .task span {
				font-weight: bold;
				font-size: 10px;
				background-color: red;
				color: white;
				padding: 2px 6px;
				border-radius: 4px;
				cursor: pointer;
			}
		</style>
	</head>
	<body>
		<div class="container">
			<div class="form">
				<input type="text" class="input" />
				<input type="submit" class="add" value="Add Task" />
			</div>
			<div class="tasks"></div>
		</div>
		<script src="main.js"></script>
	</body>
</html>
```

### JS

```js
let input = document.querySelector(".input");
let submit = document.querySelector(".add");
let tasksDiv = document.querySelector(".tasks");

// Empty array to store the tasks
let arrayOfTasks = [];

// Check if there are tasks in local storage
if (window.localStorage.getItem("tasks")) {
	arrayOfTasks = JSON.parse(window.localStorage.getItem("tasks"));
}

// Trigger get data from local storage function
getDataFromLocalStorage();

// Add task
submit.onclick = function () {
	if (input.value !== "") {
		addTaskToArray(input.value);
		input.value = "";
	}
};

// Click on task element
tasksDiv.addEventListener("click", (e) => {
	// Delete button
	if (e.target.classList.contains("del")) {
		// Remove element from page
		e.target.parentElement.remove();
		// Remove task from local storage
		deleteTaskWith(e.target.parentElement.getAttribute("data-id"));
	}
	// Task element
	if (e.target.classList.contains("task")) {
		// Toggle completed
		toggleStatusTaskWith(e.target.getAttribute("data-id"));
		// Toggle done class
		e.target.classList.toggle("done");
	}
});

function addTaskToArray(taskText) {
	// Task Data
	const task = {
		id: Date.now(),
		title: taskText,
		completed: false,
	};
	// Push task to array of tasks
	arrayOfTasks.push(task);
	// Add tasks to page
	addElementsToPageFrom(arrayOfTasks);
	// Add tasks to local storage
	addDataToLocalSotrageFrom(arrayOfTasks);
}

function addElementsToPageFrom(arrayOfTasks) {
	// Empty tasks div
	tasksDiv.innerHTML = "";
	// Looping on array of tasks
	arrayOfTasks.forEach((task) => {
		// Create main div
		let div = document.createElement("div");
		div.className = "task";
		// Check if task is done
		if (task.completed) {
			div.className = "task done";
		}
		div.setAttribute("data-id", task.id);
		div.appendChild(document.createTextNode(task.title));
		// create button
		let span = document.createElement("span");
		span.className = "del";
		span.appendChild(document.createTextNode("Delete"));
		// Append button to main div
		div.appendChild(span);
		// Add tasks div to tasks container
		tasksDiv.appendChild(div);
	});
}

function addDataToLocalSotrageFrom(arrayOfTasks) {
	window.localStorage.setItem("tasks", JSON.stringify(arrayOfTasks));
}

function getDataFromLocalStorage() {
	let data = window.localStorage.getItem("tasks");
	if (data) {
		let tasks = JSON.parse(data);
		addElementsToPageFrom(tasks);
	}
}

function deleteTaskWith(taskId) {
	arrayOfTasks = arrayOfTasks.filter((task) => task.id !== taskId);
	addDataToLocalSotrageFrom(arrayOfTasks);
}

function toggleStatusTaskWith(taskId) {
	for (let i = 0; i < arrayOfTasks.length; i++) {
		if (arrayOfTasks[i].id === taskId) {
			arrayOfTasks[i].completed == false
				? (arrayOfTasks[i].completed = true)
				: (arrayOfTasks[i].completed = false);
		}
	}
	addDataToLocalSotrageFrom(arrayOfTasks);
}
```
