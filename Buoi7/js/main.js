// --------------- function --------------
// return: tra ve gia tri cu the
function sum1(a, b) {
  // a, b are parameters
  return a + b;
}
console.log(sum1(12, 5));

// khong return: thuc hien code va thoat func
function sum2(a, b) {
  console.log(a + b);
}
sum2(12, 5);

// ----------- var scope ---------------------
let d = 10; // bien ngoai ham
function getRandom() {
  function abc() {
    var a = 12;
  }
  //console.log(a); // error: out of scope -> is not defined
  let b = 15;
  const c = 5;
  // c += 10; // error: assignment of constant var
  d += 15;
}
getRandom();
console.log(d);

// ------------ var # let --------------
// var
for (var index = 0; index < 5; index++) {
  console.log(index);
}
console.log("Ind: ", index); // 5

// let
for (let ind = 0; ind < 5; ind++) {
  console.log(ind);
}
// console.log("Ind: ", ind); // error: out of scope

// -------- Check age ---------------------
// let input = prompt("How old are you?");

function checkAge(age) {
  if (age < 0) {
    document.write("You haven't been born.");
  } else if (age < 18) {
    document.write("You are a teen");
  } else {
    document.write("You are an adult");
  }
}

// checkAge(input);

// ---------- DOM ----------------------
// DOM: Document Object Model (HTML, XML)
// tag
const divList = document.getElementsByTagName("div");
console.log(divList); // tra ve array
const div1 = document.querySelector("div");
console.log(div1); // tra ve 1 cai dau tien 
const divList1 = document.querySelectorAll("div");
console.log(divList1);

// class
const classList = document.getElementsByClassName("one");
console.log(classList); // tra ve array
const one1 = document.querySelector(".one");
console.log(one1);

// id
const idItem = document.getElementById("two");
console.log(idItem); // tra ve 1 phan tu duy nhat
const two1 = document.querySelector("#two");
console.log(two1);





