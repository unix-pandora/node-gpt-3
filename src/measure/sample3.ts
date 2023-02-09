const readLine2 = require("readline");

const rl = readLine2.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function getAnswer(callback: any) {
  rl.question("Please enter a string: ", (answer: string) => {
    callback(answer);
    rl.close();
  });
}

getAnswer((answer: string) => {
  const result = answer;
  console.log(`The entered string is: ${result}`);
});
