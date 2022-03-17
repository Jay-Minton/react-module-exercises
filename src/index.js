import React from "react";
import foodArray from "./foods";
import { choice, remove } from "./helpers";

const randoFruit = foodArray[choice(foodArray)];

console.log(`I'd like one ${randoFruit} Please`);
console.log(`Here you go:${randoFruit}`);
console.log(`Delicious! May I have another?`);
let foodsLeft = remove(foodArray, randoFruit);
console.log(`I'm sorry we're all out. We have ${foodsLeft.length} left.`);
