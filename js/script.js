// 0-misol
// for (let i = 1; i <= 100; i++) {
//   document.write(i + "<br>");
// }

// 1-masala

// let num = +prompt("Ixtiyoriy sonini kiriting");
// let i;
// for (let i = 1; i <= num; i += 1) {
//   console.log(i);
// }

// 2 - misol;
// let Number = +prompt("Ixtiyoriy sonni kiritng");
// let sum = 0;
// let i;
// for (i = 1; i <= Number; i += 1) {
//   sum += i;
// }
// document.write("Yig'indi: " + sum);
// 3-misol
// let number = +prompt(" Ixtiyoriy sonni kiritng");
// let sum$ = 0;
// let i;
// for (i = 1; i <= number; i += 1) {
//   if (i % 2 == 1) {
//     sum$ += i;
//   }
// }
// console.log("Yig'indi: " + sum$);

// 4-misol

// let a = +prompt(`Boshlang'ich sonni kiriting`);
// let b = +prompt(`Tugash sonni kiriting`);
// let res = 1;
// let i;
// for (i = a; i <= b; i += 1) {
//   if (i % 2 == 0) {
//     res *= i;
//   }
// }
// document.write(`Ko'paytmasi:` + res);

// 5-misol
// let num1 = +prompt(`Boshlang'ich sonni kiriting`);
// let num2 = +prompt(`Tugash sonni kiriting`);
// let res1 = 0;
// let i;
// for (i = num1; i <= num2; i += 1) {
//   if (i % 3 == 0 && i % 5 == 0) {
//     res1 += i;
//   }
// }
// document.write(`Yig'indi:` + res1);

// 6-masala

// let number$ = +prompt(`Ixtiyoriy sonni kiriting`);
// let i;
// let Res;
// let Sum = 0;
// for (i = 1; i <= number$; i += 1) {
//   if (number$ % i == 0) {
//     Sum += 1;
//     Res = Sum;
//   }
// }
// document.write(`Yig'indi:` + Res);

// 7-misol
let Number$ = +prompt("Ixtiyoriy sonni kiriting");

let tubmi = true;

if (Number$ <= 1) {
  tubmi = false;
} else {
  for (let k = 2; k < Number$; k++) {
    if (Number$ % k === 0) {
      tubmi = false;
      break;
    }
  }
}

if (tubmi) {
  console.log(`${Number$} tub son.`);
} else {
  console.log(`${Number$} tub emas.`);
}
