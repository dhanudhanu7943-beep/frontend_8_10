let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

fruits.push("Pineapple");
fruits.push("Watermelon");

fruits.pop();

console.log(fruits);







let vechile = ["car", "Bike", "bus", "auto"];
vechile.shift();

vechile.unshift("THAR");

console.log(vechile);



const createCounter = () => {

    let count = 0;

    return () => {
        count++;
        return count;
    };
};

const counter = createCounter();

console.log(counter());
console.log(counter());
console.log(counter());




const numbers = [10, 20, 30];
const num=[]
for (let a=0;a<=numbers.length-1;a++){
    num[num.length]=numbers[a]

}
num[num.length]=40
console.log(num);





const fruits1 = ["Apple", "Mango", "Orange"];
const vegetables = ["Carrot", "Potato"];
fruits1.pop()
fruits1.push("banana")
console.log(fruits1);

vegetables.shift()
vegetables.unshift("Grapes")
console.log(vegetables);

const result=fruits1.concat(vegetables)
console.log(result);
const length=result.length
console.log(length);

