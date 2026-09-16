console.log("Create an array of 5 numbers. Add 3 new numbers to the end using push() and display the final array.");

let values=[1,2,3,4,5]
values.push(8,9)
console.log("final array:",values);



console.log("Create an array of 5 city names. Remove the first city using shift(), then add a new city at the beginning using unshift");

let name=["ooty","chennai","bangalore","landon","america"]
name.shift()
name.unshift("munnar")
console.log(name)



console.log("Create an array containing 6 fruits. Remove the last 2 fruits using pop() and display the removed values and final array.");

let fruits=["mango","orange","apple","kivi","rambotan","pineapple"]
fruits.pop()
fruits.pop()
console.log("final array",fruits)


console.log("Create an array of 5 student names. Use forEach() to print each student's name along with their position number.");

let std=["moni","anbu","bhuvi","abi","dhanu"]
let detail = std.forEach((e,i)=>{
    console.log(i+1 +":"+ e);
})


console.log("Create an array of numbers:");

let num1=[10,20,30,40]
let detail1 = num1.map((e)=>{
    return e*3
})
console.log(detail1);





