// type aliases
type stringOrNumber = string | number 


type guitar = {
    name:string,
    active:boolean,
    albom:(string|number)
}

type StringOrNumberArr =(string|number)[]

type userId = stringOrNumber



let userID:userId = 'data'
console.log(userID) 
let names = 'ali'
//  literal type 

let MyName = 'dave' 
let userName : 'dave'|'reza' |'ema'

userName = 'dave'


// function 

const add =(a:number ,b:number ) :number =>{
    return a+b
  }