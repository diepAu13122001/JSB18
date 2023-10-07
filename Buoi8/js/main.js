// 6 Kieu du lieu co ban cua JS

//---------- Number ------------------
var age = 22;
console.log("Your age", age);
console.log(typeof age);

// --------- Boolean -----------------
var isAdult = true;
console.log("You are adult", isAdult);

//---------- String ------------------
var firstName = "Diep";
console.log("Your name is" + firstName);

// --------- null ---------------------
var phone = null;
console.log("Your phone number is", phone);

//----------- undefined ----------------
var address;
console.log("Your address is", address);

// ---------- array --------------------
var books = ["Book 1", "All in love", "Book 3", 1];
console.log("Your favorite books are", books);

// --------- object --------------------
var closedFriend = {
  full_name: "Nguyen Thi B",
  age: 23,
  address: null,
};
console.log("Your best friend's name", closedFriend.full_name);

// ------ Cac pham vi cua bien ----------------
// var: toan file JS hien tai
// let: co pham vi hoat dong ro rang
// const: hang so

//-------------- toan tu ----------------------
// Toan tu so hoc - Arithmetic Operators
let a = 5;
console.log(a + 10);

console.log(a - 10);

console.log(a * 15);

console.log(a ** 2); // luy thua (cho phien ban JS ES6)

console.log(a / 2);

console.log(a % 2); // lay phan du

a++;
console.log(a);

a--;
console.log(a);

// Toan tu so sanh - Comparison Operators
let x = 12;
let y = 15;
let z = "12";

console.log(x == y);

console.log(x === z);

console.log(x != y);

console.log(x !== z);

console.log(x > y);

console.log(x < y);

console.log(x <= y);

console.log(x >= y);

// Toan tu logic - Logical Operators
let first = x < y; // true
let second = x == y; // false

console.log(first && second); // and

console.log(second || first); // or

console.log(!second); // not

// Toan tu gan - Assignment Operators
x = y; // luu lai gia tri
console.log(x); // phep gan

console.log((x += y)); // x = x + y

console.log((x -= y)); // x = x - y

console.log((x *= y)); // x = x * y

console.log((x /= y)); // x = x / y

console.log((x %= y)); // x = x % y

// Toan tu 3 ngoi - Conditional Operators
// (dieukien) ? dieukienDung : dieukienSai
let varA = 12 % 2 == 0 ? "So chan" : "So le";
console.log(varA);

// -------- if - else -------------------------
let myAge = 12;
if (myAge < 0) {
  console.log("You haven't born");
} else if (myAge < 18) {
  console.log("You are a teen");
} else {
  console.log("You are an adult");
}

// ----------- switch - case ------------------
let answer = "A";
switch (answer) {
  case "A":
    console.log("Your ans is A");
    break;
  case "B":
    console.log("Your ans is B");
    break;
  case "C":
    console.log("Your ans is C");
    break;
  default:
    console.log("Your ans is wrong");
    break;
}

// -------- vong lap --------------------------
