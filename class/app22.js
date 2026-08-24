// var a = 10;
// let a = 10;

// if (true) {
//   let a = "x";
// }
// a = "z";

// function test() {
//   var a = 10;
//   if (true) {
//     var a = 20;
//     console.log(a);
//   }
//   console.log(a);

// let array = [1, 2, 3, 4];

// function m(m) {
//   for (let index = 0; index < array.length; index++) {
//     const element = array[index];

//     console.log(array[1]);
//   }
// }

const myArr = [1, 2, 3, 4, 5];

function filter(array, callback) {
  let newArray = [];
  for (let index = 0; index < array.length; index++) {
    const iteam = array[i];
    let result = callback(iteam);
    if (result) newArray.push(result);
  }
  return newArray;
}

function odd(num) {
  if (num % 2 !== 0) return num;
}
const oddlist = filter(myArr, odd);
console.log(eve);
