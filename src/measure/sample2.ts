const input = `

nodejs报错,如何解决:
Error [ERR_REQUIRE_ESM]: require() of ES Module ./node_modules/remark/index.js from ./src/utensil.ts not supported.
Instead change the require of index.js in ./utensil.ts to a dynamic import() which is available in all CommonJS modules.


`;

// const output = input.trim().replace(/^\s*[\r\n]+|[\r\n]+\s*$/gm, "");
const output = input
  .trim()
  .replace(/[\r\n]+/g, "")
  .replace(/\s*,\s*/g, ",")
  .replace(/,+$/g, "");

console.log(output);
