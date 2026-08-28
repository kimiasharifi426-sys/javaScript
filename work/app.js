var numbers = [1, 2, 3, 2, 4, 1, 5, 1, 3, 2, 4, 4];
var A = {};

for (var i = 0; i < numbers.length; i++) {
  var num = numbers[i];
  A[num] = (A[num] || 0) + 1;
}

console.log(A);

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

var students = [
  {
    name: "ali",
    score: [20, 18, 14, 15],
  },
  {
    name: "erfan",
    score: [17, 19, 13, 15],
  },
  {
    name: "erfan2",
    score: [14, 12, 9, 20],
  },
];

function average(students) {
  var sum = 0;

  for (var i = 0; i < student.score.length; i++) {
    sum = sum + student.score[i];
  }

  return sum / student.score.length;
}

for (var i = 0; i < students.length; i++) {
  console.log(students[i].name + " average = " + average(students[i]));
}

function getBestStudent(students) {
  var bestStudent = students[0];
  var bestAverage = average(students[0]);

  for (var i = 1; i < students.length; i++) {
    var currentAverage = average(students[i]);

    if (currentAverage > bestAverage) {
      bestAverage = currentAverage;
      bestStudent = students[i];
    }
  }

  return bestStudent;
}

var best = getBestStudent(students);

console.log("Best Student: " + best.name);
console.log("Average: " + average(best));

switch (operator) {
  case "+":
    break;
  case "-":
    return num1 - num2;
}

function zarb() {
  var zarb = {};
  for (var i = 1; i >= 10; i++) {
    for (var j = 1; j >= 10; j++) {
      console.log(`${i}*${j}=${i * j}`);
    }
  }
}
