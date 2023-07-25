"use strict";
// let user: { id: number; age: number } = {
//   id: 10,
//   age: 22,
// };
// console.log(user.id);
// const nameses: (number | string)[][] = [["amir", "ali", 10]];
// console.log(nameses);
// // set parameter for function
// function isLogin(username: string, password: string | number) {
//   if (username === "admin" && password === "admin") {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(isLogin("admin", "admin"));
// // set parameter for function
// // control returned data 
// function isLogined(username: string, password: string | number): boolean {
//   if (username === "admin" && password === "admin") {
//     return true
//   } else {
//     return false;
//   }
// }
// console.log(isLogined("admin", "admin"));
// // any type in ts
// // its mean any type you want to use 
// let testAny :any =12
// testAny = 'ali'
// testAny = 10
// console.log(typeof(testAny))
// function sumer(num1:any,num2:number): number {
//         return num1 + num2
// }
// let testArreys: any[] = ['amin',12,true] 
// console.log(testArreys)
// console.log(sumer(10,11))
// union type 
let test = 12;
test = 'js';
// // // Literal type 
// let age : 18 | 19 | 20
// const userAge = 19
// function setCssProperty(params :'px'|'em'|'rem'){
//     return `20${params}`
// }
// console.log(setCssProperty('px'))
////// template literal type
let num1 = 12;
let num3 = 41;
let suming = `sum:${num1 + num3}`;
const setCssStyle = (params) => {
    return params;
};
console.log(setCssStyle('10rem'));


