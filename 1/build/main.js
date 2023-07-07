"use strict";
// let username = 'reza'
'you get that ';
// let username = 'reza'
let username;
let phone;
let isLoading;
let album;
// error , 
// we can't set number to the string variable
// username = 40 ❌
// username = 'ali' ✔
// ========================================
// type script can infer what function is about to return 
const sum = (a, b) => {
    return a + b;
};
console.log(sum(1, 11));
// ========================= arrays
let stringArr = ['one', 'two', 'three'];
let guitars = ['strat', 'les paul', 5051];
let micedData = ['evh', 1980, true];
console.log('string arr', stringArr);
stringArr[0] = 'jhon';
console.log('string arr', stringArr);
stringArr.push('amir');
console.log('string arr', stringArr);
// ========================= tuple
let mytuple = ['dava', 42, true];
let mixed = ['jhon', 1, false];
console.log('tuple', mytuple, mixed);
mytuple[1] = 44;
// ========================= objects
let myObj;
myObj = guitars;
myObj = {};
const exampleObj = {
    prop1: 'dave',
    prop2: false
};
exampleObj.prop1 = 'amir';
//  its not working of course  because when you define an object at the first place  
// you define its type and you cant change  any thing in that 
// like this:
//                               exampleObj.prop2 = 'amir'
console.log('example obj', exampleObj);
// dude you can even sue interface instead of type i dont know what is that mean bot im gonna find out 
let evt = {
    name: 'reza',
    active: false,
    album: [1984, 2009, 2099, 'dalign'],
};
console.log('guitarist', evt);
//  that is interesting did you see that ? we just create a class like with type 
//  so here we go we just create a type guitarist and we assign it to evt object like that 
//  thats cool 
let jp = {
    name: 'jimmy',
    active: false,
    album: [555, 111, 2099, 'dalign'],
};
evt = jp;
console.log(evt);
// ========================= enums
// please search about enums and find out what the fuck is it ?
var grade;
(function (grade) {
    grade[grade["u"] = 0] = "u";
    grade[grade["a"] = 1] = "a";
    grade[grade["d"] = 2] = "d";
    grade[grade["s"] = 3] = "s";
    grade[grade["w"] = 4] = "w";
})(grade || (grade = {}));
console.log(grade.u);
