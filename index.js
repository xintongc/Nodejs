//console.log("hello world");

import * as Readline from "readline";
import * as FS from "fs";
import AsciiImage from "image-to-ascii";

const rl = Readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// rl.question("what do you think of Node.js?", answer => {
//   console.log("Thank you for your valuable feedback:", answer);
//   rl.close();
// });
//
rl.question("what do you want to save into local file system:", message => {
  FS.appendFile("database.txt", message, err => {
    if (err) throw err;
    console.log("Your message has been saved!");
  });
  rl.close();
});
//
// rl.question("Do you want to see database?", () => {
//   FS.readFile("database.txt", "utf8", (err, data) => {
//     if (err) throw err;
//     console.log(data);
//     rl.close();
//   });
// });

// rl.question("Please provide the image url:", url => {
//   AsciiImage(url, (err, converted) => {
//     console.log(err || converted);
//     rl.close();
//   });
// });

// rl.question("what is the sum of these number: ", input => {
//   const sum = input
//     .split(",")
//     .map(str => Number(str))
//     .reduce((acc, num) => acc + num);
//
//   console.log(sum);
//   rl.close();
// });
