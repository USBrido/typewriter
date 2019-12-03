// const sentence = "hello there from lighthouse labs";

// for (const char of sentence) {
//  setTimeout(() => {
//   process.stdout.write (char)
//   }, 1000)
// };

const sentence = "hello there from lighthouse labs";
const split = sentence.split('');
split.push('\n');
let timer = 0;
for (const char of split) {
  timer += 50;
 setTimeout(() => {
  process.stdout.write (char)
  }, timer)
};