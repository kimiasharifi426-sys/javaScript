// var frvar store= {
//     name: "tech store",
//      address: ind =["mina","pary","yalda"];
// console.log(frind[2]);

// n

// var user ={
//     firstName: "mina",
//     lastName: "sharifi",
//     age: 27,
//     address: {
//         country:"iran",
//         city:"isfahan",
//         postalcode:"12345678",
//     },
//     job:["trader", "entrepreneurship"],
//     isFamale: true,ُ

// };
// var car = {
//     name:"207",
//     price: 10000,

// };

// if(car.price > 700) {
//     confirm.log( ":(" )
// }
// else{
//     console.log("horaa");
// }

// var student = [
//    {

//     name:"ali",
//     score:3
// } ,
// {
//     name: "Abi" ,
//     score:0
// },

// {
//     name: "asghar",
//     score:60
// }
// ]
// var totalscore= student[0].score +student[1].score + student[2].score>50;

// if( totalscore > 40){
//     console.log ( "can go");
// }

// else{
//     console.log( "cant go");
// }

// var rate =5
// if( rate > 2){
//     console.log("bad");
// }
// else if (rate>3 &&
//     p rate<4){
//     console.log( "good");

// var ismember = true;
// console.log (ismember===true ? console.log("20%") : console.log(" bye"));

// var country="iran";
// var city="tehran";
// console.log(countr==="iran" ? city==="tehran" console.log("iran and tehran")

// for (var i = 1; i < 10; i++) {
//   console.log(i);
// }

// var students = ["sina", "kimia", "sanaz", "a"];
// for (var i = 0; i < 4; i++) console.log("students[1]");

// var i = 0;
// while (i < 5) {
//   console.log(i);
//   i++;
// }

var numbers = [1, 2, 3, 2, 4, 1, 5, 1, 3, 2, 4, 4];
var A = {};

for (var i = 0; i < numbers.length; i++) {
  var num = numbers[i];
  A[num] = (A[num] || 0) + 1;
}

console.log(A);

var numbers = [3, 8, 15, 2, 7, 10, 4, 9, 6, 1];

var maxEven = null;
var minOdd = null;

for (var i = 0; i < numbers.length; i++) {
  var num = numbers[i];

  if (num % 2 === 0) {
    if (maxEven === null || num > maxEven) {
      maxEven = num;
    }
  } else {
    if (minOdd === null || num < minOdd) {
      minOdd = num;
    }
  }
}

console.log("بزرگ‌ترین عدد زوج: " + maxEven);
console.log("کوچک‌ترین عدد فرد: " + minOdd);
