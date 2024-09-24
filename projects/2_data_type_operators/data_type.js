console.log(typeof 13);
console.log(13 + (4.2 * 2) / 3);

/* logical operations*/
console.log(typeof NaN);

// string
console.log(typeof "this is a string");
console.log(typeof `this is a string`); // template literals;
console.log("this is \n a string in 2 lines");

console.log(`this is a string ${2 + 2}`); // ` backticks;
console.log("con" + "ca" + "te" + "na" + "te");

// boolean
console.log(5 > 3);
console.log(2 > 3);
console.log(typeof (2 > 3));
console.log();

console.log("&& retornando false: ");
console.log(true && false); // false
console.log(5 > 3 && 3 == 2);

console.log("&& retornando true: ");
console.log(true && true); // true
console.log("marcos" === "marcos" && 3 == 3);

console.log("|| retornando false: ");
console.log(false || false); // false
console.log(2 == 3 || 3 == 2);

console.log("!true retornando false: ");
console.log(!true);

// ternary boolean
// condition  if    true else false
console.log(5 > 2 ? "yes" : "no");

// empty
console.log(null);
console.log(undefined);

console.log(3 * null); // 0
console.log(typeof ("5" - 3)); // 2
console.log("5" + 1); // 51
console.log("two" * "three"); //NaN
