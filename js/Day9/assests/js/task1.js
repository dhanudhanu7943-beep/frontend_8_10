function add(a,b){
    return a+b;
}

  let result=add(10,20);

  console.log(result);



  function printEven(n){
    for( let i=1; i<=n;i++){
        if(i % 2===0){
            console.log(i)

        }
    }
  }
  printEven(10);


  const factorial = (n) => {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact = fact * i;
    }
    return fact;
};

console.log(factorial(5));


let name="dhanu";
var age=21;
const course="FS";


console.log(name);
console.log(age);
console.log(course);


function student(){
let name="dhanu";
var age=21;
const course="FS";


console.log(name);
console.log(age);
console.log(course);

}
student()


if (true) {
    let name = "Dhanu";
    const age = 22;

    console.log(name);
    console.log(age);
}





