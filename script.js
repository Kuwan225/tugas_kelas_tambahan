console.log("No 1");

function areaTriangle(alas, tinggi) {
  return (alas * tinggi) / 2;
}
console.log(areaTriangle(8, 10));
console.log(areaTriangle(5, 7));
console.log(areaTriangle(9, 2));

console.log("No 2");
function lessThan100(num1, num2) {
  if (num1 + num2 > 100) {
    console.log(true);
  } else {
    console.log(false);
  }
}
lessThan100(22, 15);
lessThan100(83, 34);
lessThan100(3, 77);

console.log("No 3");

function comp(parms1, parms2) {
  if (parms1.length == parms2.length) {
    console.log(true);
  } else {
    console.log(false);
  }
}
comp("AB", "CD");
comp("ABC", "DE");
comp("hello", "edabit");
