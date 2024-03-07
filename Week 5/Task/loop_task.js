let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;

while (index < friends.length) {
	index++;
	if (typeof friends[index] === "string" && !friends[index].startsWith("A")) {
		console.log(`${counter + 1} => ${friends[index]}`);
		counter++;
	} else {
		continue;
	}
}
