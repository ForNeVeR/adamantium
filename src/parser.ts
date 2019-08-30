import {readFileSync} from "fs";

const tokenize = (data: string) => data.split(/\s+/);

const args = process.argv;
const input = args[2];
const data = readFileSync(input).toString();
const tokens = tokenize(data);

console.log(tokens);
