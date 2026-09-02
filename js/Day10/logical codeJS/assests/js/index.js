
let num=15;
if (num % 2==0){
    console.log("Eeven");
}else{
    console.log("odd");
}


let number=5;
if (number>0){
    console.log("positive");
}else{
    console.log("negative")
}


let a=10;
let b=50;
if (a > b) {
    console.log(a);
} else {
    console.log(b);
}


let c=6;
let d=10;
if (c < d){
console.log(c);
} else {
    console.log(d);
    
}


for (let i = 1; i <= 20; i++) {

    if (i % 2 == 0) {
        console.log(i);
    }

}

for (let i = 1; i <= 10; i++) {
    console.log(i);
}


let sum = 1;

for (let i = 1; i <= 10; i++) {
    sum = sum + i;
}

console.log(sum);



let no=5;
let factorical=1;
for(i=1;i<=no;i++){
    factorical=factorical*i;
}
console.log(factorical);





let numbers = [25, 60, 10, 80, 45, 70];

let highest = numbers[0];
let secondHighest = numbers[0];

for (let i = 1; i < numbers.length; i++) {

    if (numbers[i] > highest) {
        secondHighest = highest;
        highest = numbers[i];
    }
    else if (numbers[i] > secondHighest) {
        secondHighest = numbers[i];
    }
}

console.log("Second Highest =", secondHighest);
