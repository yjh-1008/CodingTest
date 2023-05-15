
let input = require("fs").readFileSync("index.txt").toString().trim().split("\n").map(a => +a)
const sum = input.reduce((a, b) => a + b);
input.sort((a, b) => a - b);
let result;
for (i = 0; i < 8; i++) {
    for (j = i + 1; j < 9; j++) {
        if (sum - input[i] - input[j] === 100) {
            result = input.filter(x => x !== input[i] && x !== input[j]);
            break;
        }
    }
    if(result){
        break;
    }
}
console.log(result.join("\n"));