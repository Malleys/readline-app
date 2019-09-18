const readline = require("readline");
const chalk = require("chalk");
const rl = readline.createInterface(process.stdin, process.stdout);
const MESSAGE = chalk.bold("Введите PIN-код:");

const number = [
  [0, 8],
  [1, 2, 4],
  [1, 2, 3, 5],
  [2, 3, 6],
  [1, 4, 5, 7],
  [2, 4, 5, 6, 8],
  [3, 5, 6, 9],
  [4, 7, 8],
  [0, 5, 7, 8, 9],
  [6, 8, 9]
];

function cartesianProduct(arr) {
	return arr.reduce((a, b) => a.map((x) => b.map((y) => x.concat(y))).reduce((a, b) => a.concat(b), []), [[]]);
}

console.log(MESSAGE);

rl.on("line", result => {
	const finalNumber = Array.from(result, a => [].concat(number[a]));
	const product = cartesianProduct(finalNumber);
	const finalString = product.map(xs => xs.join("")).join(", ");

	console.log(chalk.green(finalString));
	console.log(MESSAGE);
}).on("close", () => {
	process.exit(0);
});