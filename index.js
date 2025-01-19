// 1. Create a function that calculates the sum of two given numbers.

function calcFun(x, y) {
  return x + y;
}

// console.log(calcFun(3,5));

// ------------------------------------------

// 2. Write a function that checks if a number is prime (a number that can only
//    be divided by 1 and itself without any remainder).

function checkPrime(x) {
  if (x <= 1) {
    return false;
  }

  for (let i = 2; i < x; i++) {
    if (x % i == 0) {
      return false;
    }
  }

  return true;
}

console.log(checkPrime(1));

// ------------------------------------------

// 3. Write a function to reverse a given string (using built in method).

function reverseFun(str) {
  return str.split("").reverse().join("");
}
// console.log(reverseFun("ali")); // ila

// ------------------------------------------

// 4. Write a function to find the largest number in an array.

// with built-in
function largeNum() {
  let arr = [1, 3, 7, 2, 4];
  let arr1 = arr.sort();
  console.log(arr1[arr1.length - 1]);
}
// largeNum();

// 5. Write a function that filters an array and returns only the even numbers.

function filtEvenArr() {
  let evenArr = [];
  let arr = [1, 2, 3, 4, 5, 6];
  arr.forEach((el) => {
    if (el % 2 == 0) {
      evenArr.push(el);
    }
  });
  console.log(evenArr);
}
// filtEvenArr()

// 6. Implement a function to reverse a string without using the built-in reverse()
// method.

function revString() {
  let str = "route";
  let newStr = "";
  for (let k = str.length - 1; k >= 0; k--) {
    newStr += str[k];
  }
  console.log(newStr);
}
// revString();

// 7. Write a function to calculate the average value of all numbers in an array.

function avg() {
  let arr = [1, 2, 3, 4, 5];
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    count += arr[i];
  }
  let average = count / arr.length;
  console.log(average);
}
// avg();

// 8. Write a function that determines whether a given day number (1-7)
// represents a weekday or weekend.

function dayDeternmine(x) {
  if (x == 7) {
    console.log("Weekend");
  } else {
    console.log("Weekday");
  }
}
// dayDeternmine(7)

// 9. Write a function that filters an array of numbers and returns only those that
// are divisible by 2 or 3.

function checkEvenNums() {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0 || arr[i] % 3 === 0) {
      newArr.push(arr[i]);
    }
  }
  console.log(newArr);
}
// checkEvenNums();

// 10. Write a function that finds the index of a given element in an array. If the
// element isn’t found, return `-1`.

function findNum(x) {
  let nums = [1, 2, 3, 4, 5];
  if (nums.length - 1 > x) {
    return nums[x];
  } else {
    return -1;
  }
}

// console.log(findNum(2)); // -1

// ----------------------------------------------------------------

// 11. Write a function to calculate the factorial of a given number.

function calcFactorial(x) {
  let count = 1;
  for (let i = x; i >= 1; i--) {
    count = count * i;
  }
  console.log(count);
}

// calcFactorial(5); // 120

// 2. Write a function that takes an object and returns an array containing only
// its keys.

function objToArr(obj) {
  let arr = [];
  for (let i in obj) {
    arr.push(i);
  }
  console.log(arr);
}

// objToArr( {name: "John", age: 30}); [ name,age ]

// 13. Write a function that returns only the unique numbers from an array.

function uniqueNums() {
  let nums = [1, 2, 2, 3, 4, 4, 5];
  let duplicate = [];
  let unique = [];

  for (let i = 0; i < nums.length; i++) {
    let isDuplicate = false;
    for (let k = 0; k < nums.length; k++) {
      if (nums[i] === nums[k] && i != k) {
        isDuplicate = true;
        break;
      }
    }

    if (isDuplicate) {
      duplicate.push(nums[i]);
    } else {
      unique.push(nums[i]);
    }
  }

  console.log(unique);
}

// uniqueNums();  [ 1, 3, 5 ]

// 14. Write a function to count the occurrences of each character in a string.

function countStr() {
  let str = "hello";
  let objDup = {};
  for (let i = 0; i < str.length; i++) {
    let isDuplicate = 1;
    for (let k = 0; k < str.length; k++) {
      if (str[i] === str[k] && i != k) {
        isDuplicate++;
        break;
      } else {
        objDup[str[k]];
      }
    }

    // {h: 1, e: 1, l: 2, o: 1}
    objDup[str[i]] = isDuplicate;
    console.log(objDup);
  }
}
// countStr()

// 15. Write a function that sorts an array of numbers in ascending order.

function sortAsc() {
  let nums = [5, 3, 8, 1, 2];

  for (let i = 0; i < nums.length; i++) {
    for (let k = 0; k < nums.length; k++) {
      if (nums[k] > nums[k + 1]) {
        let temp = nums[k];
        nums[k] = nums[k + 1];
        nums[k + 1] = temp;
      }
    }
  }

  console.log(nums); // [ 1, 2, 3, 5, 8 ]
}
// sortAsc();

// 16. Write a function to check if a given string is an anagram of another string
// (i.e., contains the same characters in a different order).

function checkString() {
  // "listen", "silent"

  let str1 = "listen";
  let str2 = "silent";

  let str1Arr = str1.split("");
  let str2Arr = str2.split("");
  let status = false;

  for (let i = 0; i < str1Arr.length; i++) {
    for (let k = 0; k < str2Arr.length; k++) {
      if (str1Arr[i] == str2Arr[k] && i != k) {
        status = true;
      }
    }
  }
  console.log(status);
}
// checkString()

// 17. Write a function that creates a car object with properties such as `model`
// and `year’ and includes a method to display the car's details

function Car(model, year) {
  this.model = model;
  this.year = year;
  this.details = function () {
    console.log(`model is ${this.model} and its year is ${this.year}`);
  };
}

let BMW = new Car("BMW", 2020);
// BMW.details()

// 19. Write a function that checks if a given object contains a specic property.
// Input: {name: "Alice", age: 25}, "name"

function checkKeyObject(obj, x) {
  for (let key in obj) {
    if (key == x) {
      console.log(true);
      return;
    } else {
      console.log(false);
      return;
    }
  }
}

// checkKeyObject({ name: "Alice", age: 25 }, "name");

// 20. Write a function that performs a mathematical operation (`+`, `-`, `*`, `/`)
// on two numbers.

//  5, 3, "+"

function calculation1(x, y, operator) {
  switch (operator) {
    case "+":
      console.log(x + y);
      break;
    case "-":
      console.log(x - y);
      break;
    case "*":
      console.log(x * y);
      break;
    case "/":
      console.log(x / y);
      break;
    default:
      console.log("invalid operator");
  }
}

// calculation1(5,10,"%");

// another solution

function calculation2(x, y, operator) {
  let express = `${x} ${operator} ${y}`;
  let num = eval(express);
  console.log(num);
}

// calculation2(5,10,"+");
