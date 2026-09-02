/**
 * JavaScript 25+ Comprehensive Interactive Topics & Quiz Data
 * Enhanced with User's Practice Code from index2.js & index.js
 */

window.userPracticeSnippets = {
  "full-index2": {
    name: "🌟 Full index2.js Practice File (All 12 Exercises)",
    code: `// ==========================================
// 1. SCOPE
// ==========================================
{
    var d = 10;
    let b = 20;
    const c = 30;

    console.log("Scope inside block - d:", d);
    console.log("Scope inside block - b:", b);
    console.log("Scope inside block - c:", c); 
}

console.log("Scope outside block - var d:", d);

// ==========================================
// 2. REDECLARATION
// ==========================================
var x = 10;
var x = 20;     
console.log("Redeclared var x =", x); 
let y = 10;
const z = 10;

// ==========================================
// 3. REASSIGN
// ==========================================
var num1 = 10;
num1 = 20;
console.log("Reassigned var num1 =", num1);
let num2 = 30;
num2 = 40;
console.log("Reassigned let num2 =", num2); 
const num3 = 50;

// ==========================================
// 4. HOISTING
// ==========================================
console.log("Hoisted var p before value =", p); 
var p = 100;
console.log("var p after assignment =", p);

// ==========================================
// 5. TDZ (Temporal Dead Zone)
// ==========================================
let q = 200;
console.log("let q after declaration =", q);

// ==========================================
// 6. BOTH EXPLICIT AND IMPLICIT RETURN
// ==========================================
const add1 = (a, b) => {
    return a + b;
};
const square = (n) => {
    return n * n;
};
console.log("Explicit add1(10, 20) =", add1(10, 20)); 
console.log("Explicit square(5) =", square(5));    

// Implicit return
const addNumberss = (a, b) => a + b;
const findSquare = (n) => n * n;
console.log("Implicit addNumberss(10, 20) =", addNumberss(10, 20));
console.log("Implicit findSquare(5) =", findSquare(5));    

// ==========================================
// 7. ARRAY DESTRUCTURING
// ==========================================
const num = [10, 20, 30];
const [a, b, c] = num;
console.log("Array Destructuring - a:", a, "b:", b, "c:", c); 

// ==========================================
// 8. OBJECT DESTRUCTURING
// ==========================================
const student = {
    name: "Ravi",
    age: 25,
    course: "JavaScript"
};
const { name, age, course } = student;
console.log("Object Destructuring - Name:", name, "| Age:", age, "| Course:", course); 

// ==========================================
// 9. REST PARAMETER
// ==========================================
function add(...numbers) {
    console.log("Rest Parameter numbers array:", numbers);
}
add(10, 20, 30, 40);

// ==========================================
// 10. SPREAD SYNTAX
// ==========================================
const numbers = [10, 20, 30];
const newNumbers = [...numbers, 40, 50];
console.log("Spread Syntax newNumbers =", newNumbers);

// ==========================================
// 11. DEFAULT PARAMETERS & TEMPLATE LITERALS
// ==========================================
function stud(name, course, city = "Chennai") {
    console.log(\`My name is \${name}. I am studying \${course} in \${city}.\`);
}
stud("Ravi", "JavaScript");

// ==========================================
// 12. CLASSES & OBJECT INSTANTIATION
// ==========================================
class data {
    constructor(name, age, mark) {
        this.name = name;
        this.age = age;
        this.mark = mark;
    }

    displayDetails() {
        console.log(\`Name: \${this.name} | Age: \${this.age} | Mark: \${this.mark}\`);
    }
}
const person1 = new data("Ravi", 20, 85);
const person2 = new data("Priya", 21, 90);
person1.displayDetails();
person2.displayDetails();`
  },
  "full-index1": {
    name: "🌟 Full index.js Practice (Logical & Algorithms)",
    code: `// 1. Even or Odd Check
let num = 15;
if (num % 2 == 0) {
    console.log("Even");
} else {
    console.log("odd");
}

// 2. Positive or Negative Check
let number = 5;
if (number > 0) {
    console.log("positive");
} else {
    console.log("negative");
}

// 3. Greater Number Comparison
let a = 10;
let b = 50;
if (a > b) {
    console.log("Greater is:", a);
} else {
    console.log("Greater is:", b);
}

// 4. Smaller Number Comparison
let c = 6;
let d = 10;
if (c < d) {
    console.log("Smaller is:", c);
} else {
    console.log("Smaller is:", d);
}

// 5. Print Even Numbers from 1 to 20
console.log("Even numbers from 1 to 20:");
for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

// 6. Print 1 to 10
console.log("Numbers 1 to 10:");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 7. Sum of Numbers 1 to 10
let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum = sum + i;
}
console.log("Sum 1 to 10 =", sum);

// 8. Factorial of 5
let no = 5;
let factorical = 1;
for (let i = 1; i <= no; i++) {
    factorical = factorical * i;
}
console.log("Factorial of 5 =", factorical);

// 9. Find Second Highest Number in Array
let scores = [25, 60, 10, 80, 45, 70];
let highest = scores[0];
let secondHighest = scores[0];

for (let i = 1; i < scores.length; i++) {
    if (scores[i] > highest) {
        secondHighest = highest;
        highest = scores[i];
    }
    else if (scores[i] > secondHighest) {
        secondHighest = scores[i];
    }
}

console.log("Second Highest =", secondHighest);`
  },
  "scope": {
    name: "1. Scope (var vs let vs const from index2.js)",
    code: `// 1. SCOPE (from index2.js)
{
    var d = 10;
    let b = 20;
    const c = 30;

    console.log("Inside block d:", d);
    console.log("Inside block b:", b);
    console.log("Inside block c:", c); 
}

console.log("Outside block (var d is accessible):", d);
// let b and const c are not accessible outside this block!`
  },
  "arrow": {
    name: "2. Arrow Functions - Explicit & Implicit (from index2.js)",
    code: `// BOTH EXPLICIT AND IMPLICIT (from index2.js)

const add1 = (a, b) => {
    return a + b;
};
const square = (n) => {
    return n * n;
};
console.log("Explicit add1(10, 20) =", add1(10, 20)); 
console.log("Explicit square(5) =", square(5));    

// Implicit return
const addNumberss = (a, b) => a + b;
const findSquare = (n) => n * n;
console.log("Implicit addNumberss(10, 20) =", addNumberss(10, 20));
console.log("Implicit findSquare(5) =", findSquare(5));`
  },
  "destructuring": {
    name: "3. Array & Object Destructuring (from index2.js)",
    code: `// ARRAY DESTRUCTURING (from index2.js)
const num = [10, 20, 30];
const [a, b, c] = num;
console.log("Array destructuring a:", a); 
console.log("Array destructuring b:", b); 
console.log("Array destructuring c:", c); 

// OBJECT DESTRUCTURING (from index2.js)
const student = {
    name: "Ravi",
    age: 25,
    course: "JavaScript"
};
const { name, age, course } = student;
console.log("Student Name:", name); 
console.log("Student Age:", age); 
console.log("Student Course:", course);`
  },
  "classes": {
    name: "4. Student Class & Instances (from index2.js)",
    code: `// Create student class and display their details (from index2.js)

class data {
    constructor(name, age, mark) {
        this.name = name;
        this.age = age;
        this.mark = mark;
    }

    displayDetails() {
        console.log(\`Name: \${this.name}\`);
        console.log(\`Age: \${this.age}\`);
        console.log(\`Mark: \${this.mark}\`);
    }
}

const person1 = new data("Ravi", 20, 85);
const person2 = new data("Priya", 21, 90);

console.log("--- Person 1 Details ---");
person1.displayDetails();

console.log("--- Person 2 Details ---");
person2.displayDetails();`
  }
};

window.jsTopics = [
  {
    id: "js-1",
    title: "1. Scope: Block Scope vs Function Scope",
    category: "Practice (index2.js)",
    difficulty: "Beginner",
    isPractice: true,
    summary: "Your practice exercise testing var, let, and const block scoping.",
    explanation: "`var` is function-scoped and accessible outside `{ }` code blocks. `let` and `const` are strictly block-scoped and cannot be leaked outside the curly braces.",
    code: `// 1. SCOPE (from your index2.js)
{
    var d = 10;
    let b = 20;
    const c = 30;

    console.log("Inside block d =", d);
    console.log("Inside block b =", b);
    console.log("Inside block c =", c); 
}

console.log("Outside block var d =", d);
// Accessing b or c here will throw ReferenceError!`,
    tips: "Keep variables inside block scope with `let` or `const` to prevent polluting global scope."
  },
  {
    id: "js-2",
    title: "2. Variable Redeclaration Rules",
    category: "Practice (index2.js)",
    difficulty: "Beginner",
    isPractice: true,
    summary: "Your practice exercise testing variable redeclaration rules in JavaScript.",
    explanation: "`var` permits redeclaring the same variable multiple times in the same scope, which often leads to accidental overwrites. `let` and `const` strictly forbid redeclaration.",
    code: `// 2. REDECLARATION (from your index2.js)
var x = 10;
var x = 20;     
console.log("Redeclared var x =", x); 

let y = 10;
// let y = 20; // Error: Identifier 'y' has already been declared

const z = 10;
// const z = 20; // Error: Identifier 'z' has already been declared
console.log("let y =", y, "| const z =", z);`,
    tips: "Strict redeclaration errors in `let` protect you from accidentally reusing variable names across large files."
  },
  {
    id: "js-3",
    title: "3. Variable Reassignment Rules",
    category: "Practice (index2.js)",
    difficulty: "Beginner",
    isPractice: true,
    summary: "Your practice exercise demonstrating reassignment on var, let, and const.",
    explanation: "`var` and `let` can have their stored value changed (reassigned) at any time. `const` variables are constant bindings and cannot be reassigned.",
    code: `// 3. REASSIGN (from your index2.js)
var num1 = 10;
num1 = 20;
console.log("Reassigned var num1 =", num1);

let num2 = 30;
num2 = 40;
console.log("Reassigned let num2 =", num2); 

const num3 = 50;
// num3 = 60; // TypeError: Assignment to constant variable
console.log("Constant num3 =", num3);`,
    tips: "Use `const` for any value that should never be reassigned, such as API URLs or static mathematical constants."
  },
  {
    id: "js-4",
    title: "4. Hoisting Behavior in JavaScript",
    category: "Practice (index2.js)",
    difficulty: "Intermediate",
    isPractice: true,
    summary: "Your practice code showing how var is hoisted as undefined before declaration.",
    explanation: "`var p = 100` hoists declaration `var p` to the top of the scope initialized to `undefined`. Thus `console.log(p)` before the line prints `undefined` without throwing an error.",
    code: `// 4. HOISTING (from your index2.js)

console.log("p before declaration =", p); // prints undefined 
var p = 100;
console.log("p after assignment =", p);   // prints 100`,
    tips: "Functions declared with `function test() {}` are completely hoisted along with their function body."
  },
  {
    id: "js-5",
    title: "5. Temporal Dead Zone (TDZ)",
    category: "Practice (index2.js)",
    difficulty: "Intermediate",
    isPractice: true,
    summary: "Your practice concept on let/const Temporal Dead Zone.",
    explanation: "Unlike `var`, `let` and `const` cannot be accessed before their declaration line. The zone between scope start and the declaration is the Temporal Dead Zone (TDZ).",
    code: `// 5. TDZ (from your index2.js)
try {
  // console.log(q); // Would throw ReferenceError: Cannot access 'q' before initialization
  let q = 200;
  console.log("let q after TDZ line =", q);
} catch (e) {
  console.log("TDZ Error:", e.message);
}`,
    tips: "Always declare variables at the top of their enclosing function or block to prevent TDZ issues."
  },
  {
    id: "js-6",
    title: "6. Arrow Functions: Explicit & Implicit Return",
    category: "Practice (index2.js)",
    difficulty: "Beginner",
    isPractice: true,
    summary: "Your practice functions implementing explicit return and implicit one-line returns.",
    explanation: "Arrow functions with curly braces `{ return expression; }` use explicit return. Arrow functions without braces `(a, b) => a + b` automatically evaluate and return the expression implicitly.",
    code: `// BOTH EXPLICIT AND IMPLICIT (from your index2.js)

// Explicit return with { return ... }
const add1 = (a, b) => {
    return a + b;
};
const square = (n) => {
    return n * n;
};
console.log("Explicit add1(10, 20) =", add1(10, 20)); 
console.log("Explicit square(5) =", square(5));    

// Implicit return (no braces, no return keyword)
const addNumberss = (a, b) => a + b;
const findSquare = (n) => n * n;
console.log("Implicit addNumberss(10, 20) =", addNumberss(10, 20));
console.log("Implicit findSquare(5) =", findSquare(5));`,
    tips: "Implicit return arrow functions are ideal for callback operations like `.map(x => x * 2)`."
  },
  {
    id: "js-7",
    title: "7. Array Destructuring Assignment",
    category: "Practice (index2.js)",
    difficulty: "Intermediate",
    isPractice: true,
    summary: "Your practice code unpacking array values into a, b, and c variables.",
    explanation: "Array destructuring unpacks items in index order. `const [a, b, c] = [10, 20, 30]` assigns index 0 to `a`, index 1 to `b`, and index 2 to `c` in a single line.",
    code: `// ARRAY DESTRUCTURING (from your index2.js)
const num = [10, 20, 30];
const [a, b, c] = num;

console.log("a =", a); 
console.log("b =", b); 
console.log("c =", c);`,
    tips: "You can skip unwanted items with empty commas: `const [first, , third] = numbers;`."
  },
  {
    id: "js-8",
    title: "8. Object Destructuring Assignment",
    category: "Practice (index2.js)",
    difficulty: "Intermediate",
    isPractice: true,
    summary: "Your practice code extracting name, age, and course from student object.",
    explanation: "Object destructuring extracts properties matching key names. `const { name, age, course } = student` binds each property to an independent variable.",
    code: `// OBJECT DESTRUCTURING (from your index2.js)
const student = {
    name: "Ravi",
    age: 25,
    course: "JavaScript"
};

const { name, age, course } = student;
console.log("Name:", name); 
console.log("Age:", age); 
console.log("Course:", course);`,
    tips: "You can rename keys during destructuring: `const { course: subject } = student;`."
  },
  {
    id: "js-9",
    title: "9. Rest Parameters (`...numbers`)",
    category: "Practice (index2.js)",
    difficulty: "Intermediate",
    isPractice: true,
    summary: "Your practice function collecting dynamic parameters into an array.",
    explanation: "The Rest parameter (`...numbers`) inside a function definition collects all passed arguments into a standard JavaScript array.",
    code: `// REST PARAMETER (from your index2.js)
function add(...numbers) {
    console.log("Received numbers array:", numbers);
    const sum = numbers.reduce((total, n) => total + n, 0);
    console.log("Calculated Sum =", sum);
}

add(10, 20, 30, 40);`,
    tips: "Rest parameter must always be the very last parameter in the function signature."
  },
  {
    id: "js-10",
    title: "10. Spread Syntax (`...numbers`)",
    category: "Practice (index2.js)",
    difficulty: "Intermediate",
    isPractice: true,
    summary: "Your practice code merging arrays with spread operator.",
    explanation: "Spread syntax expands elements of an existing array into a new array literal without mutating the original array.",
    code: `// SPREAD SYNTAX (from your index2.js)
const numbers = [10, 20, 30];
const newNumbers = [...numbers, 40, 50];

console.log("Original array:", numbers);
console.log("New Spread array:", newNumbers);`,
    tips: "Spread also clones objects quickly: `const cloned = { ...student, grade: 'A+' };`."
  },
  {
    id: "js-11",
    title: "11. Default Parameters & Template Strings",
    category: "Practice (index2.js)",
    difficulty: "Beginner",
    isPractice: true,
    summary: "Your practice student introduction function with default city='Chennai'.",
    explanation: "Default parameter `city = 'Chennai'` ensures `city` defaults to Chennai if not passed by caller. Template literals (`` ` ``) interpolate variables directly with `${}`.",
    code: `// DEFAULT PARAMETERS & TEMPLATE LITERALS (from your index2.js)
function stud(name, course, city = "Chennai") {
    console.log(\`My name is \${name}. I am studying \${course} in \${city}.\`);
}

stud("Ravi", "JavaScript");
stud("Priya", "React", "Bangalore");`,
    tips: "Default parameters can also be expressions or calls to other functions."
  },
  {
    id: "js-12",
    title: "12. OOP Classes & Student Details Display",
    category: "Practice (index2.js)",
    difficulty: "Intermediate",
    isPractice: true,
    summary: "Your practice class 'data' instantiating person1 (Ravi) and person2 (Priya).",
    explanation: "ES6 classes define constructor blueprints and instance methods. The `new data()` constructor stores properties on `this`.",
    code: `// Create two student objects and display their details (from your index2.js)

class data {
    constructor(name, age, mark) {
        this.name = name;
        this.age = age;
        this.mark = mark;
    }

    displayDetails() {
        console.log(\`Name: \${this.name}\`);
        console.log(\`Age: \${this.age}\`);
        console.log(\`Mark: \${this.mark}\`);
    }
}

const person1 = new data("Ravi", 20, 85);
const person2 = new data("Priya", 21, 90);

console.log("--- Student 1 ---");
person1.displayDetails();

console.log("--- Student 2 ---");
person2.displayDetails();`,
    tips: "Methods inside classes are automatically placed on `data.prototype`, saving memory."
  },
  {
    id: "js-13",
    title: "13. Even/Odd & Positive/Negative Logic",
    category: "Practice (index.js)",
    difficulty: "Beginner",
    isPractice: true,
    summary: "Your logic checks for number parity and polarity from index.js.",
    explanation: "Use modulus operator `% 2 == 0` to check even/odd, and relational `> 0` to verify positive/negative.",
    code: `// 1. Even or Odd (from your index.js)
let num = 15;
if (num % 2 == 0) {
    console.log("Even");
} else {
    console.log("odd");
}

// 2. Positive or Negative (from your index.js)
let number = 5;
if (number > 0) {
    console.log("positive");
} else {
    console.log("negative");
}`,
    tips: "Zero is neither positive nor negative; handle `else if (number === 0)` for completeness."
  },
  {
    id: "js-14",
    title: "14. Number Comparison: Greater & Smaller Logic",
    category: "Practice (index.js)",
    difficulty: "Beginner",
    isPractice: true,
    summary: "Your comparison conditional statements from index.js.",
    explanation: "Compare numerical values using relational `<` and `>` operators.",
    code: `// 1. Greater number (from your index.js)
let a = 10;
let b = 50;
if (a > b) {
    console.log("Greater:", a);
} else {
    console.log("Greater:", b);
}

// 2. Smaller number (from your index.js)
let c = 6;
let d = 10;
if (c < d) {
    console.log("Smaller:", c);
} else {
    console.log("Smaller:", d);
}`,
    tips: "For multiple comparisons, use `Math.max(a, b)` and `Math.min(c, d)`."
  },
  {
    id: "js-15",
    title: "15. Loops: Even Numbers & Sum of 1 to 10",
    category: "Practice (index.js)",
    difficulty: "Beginner",
    isPractice: true,
    summary: "Your loop accumulation and sequence logic from index.js.",
    explanation: "For loops iterate sequentially. An accumulator variable like `sum` calculates running totals across iterations.",
    code: `// 1. Print Even numbers 1 to 20 (from your index.js)
console.log("Even numbers 1 to 20:");
for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

// 2. Sum of numbers 1 to 10 (from your index.js)
let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum = sum + i;
}
console.log("Sum of 1 to 10 =", sum);`,
    tips: "Gauss formula `n * (n + 1) / 2` calculates sum in $O(1)$ constant time!"
  },
  {
    id: "js-16",
    title: "16. Factorial Calculation Algorithm",
    category: "Practice (index.js)",
    difficulty: "Intermediate",
    isPractice: true,
    summary: "Your factorial multiplication algorithm from index.js.",
    explanation: "Factorial multiplies running product from 1 up to $n$ ($5! = 5 \\times 4 \\times 3 \\times 2 \\times 1 = 120$).",
    code: `// Factorial Calculation (from your index.js)
let no = 5;
let factorical = 1;

for (let i = 1; i <= no; i++) {
    factorical = factorical * i;
}

console.log(\`Factorial of \${no} = \${factorical}\`);`,
    tips: "Always start factorial product accumulator with 1, because multiplying by 0 results in 0."
  },
  {
    id: "js-17",
    title: "17. Finding Second Highest Number in Array",
    category: "Practice (index.js)",
    difficulty: "Intermediate",
    isPractice: true,
    summary: "Your single-pass array algorithm to find second highest element from index.js.",
    explanation: "Traverse the array once while updating `highest` and shifting the previous `highest` into `secondHighest`.",
    code: `// Find Second Highest in Array (from your index.js)
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

console.log("Numbers Array:", numbers);
console.log("Second Highest =", secondHighest);`,
    tips: "This algorithm operates in optimal $O(n)$ time complexity and $O(1)$ extra space."
  },
  {
    id: "js-18",
    title: "18. Array Methods: `map`, `filter`, and `reduce`",
    category: "Array Methods",
    difficulty: "Intermediate",
    summary: "Transform, filter, and aggregate arrays immutably with functional methods.",
    explanation: "`map` transforms each item, `filter` extracts matching items, and `reduce` combines items into a single final value.",
    code: `const marks = [85, 90, 65, 70, 95];

// 1. Filter: Marks >= 80
const topMarks = marks.filter(m => m >= 80);
console.log("Top Marks (>=80):", topMarks);

// 2. Map: Add 5 grace marks
const boosted = marks.map(m => m + 5);
console.log("Boosted Marks:", boosted);

// 3. Reduce: Calculate Total
const total = marks.reduce((acc, curr) => acc + curr, 0);
console.log("Total Marks Sum =", total);`,
    tips: "Combine functional array methods for expressive data processing."
  },
  {
    id: "js-19",
    title: "19. Closures & Lexical State Encapsulation",
    category: "Advanced JS",
    difficulty: "Advanced",
    summary: "Functions remembering their outer lexical variables for private state.",
    explanation: "A closure allows inner functions to maintain private variables that cannot be accessed directly from outside.",
    code: `function createStudentScoreTracker(studentName) {
  let score = 0; // Private encapsulated variable

  return {
    addPoints: (pts) => {
      score += pts;
      console.log(\`\${studentName} new score: \${score}\`);
    },
    getScore: () => score
  };
}

const raviTracker = createStudentScoreTracker("Ravi");
raviTracker.addPoints(10);
raviTracker.addPoints(25);
console.log("Current Ravi Total:", raviTracker.getScore());`,
    tips: "Closures power modern JavaScript modules, hooks, and private variables."
  },
  {
    id: "js-20",
    title: "20. DOM Selection & Manipulation",
    category: "DOM",
    difficulty: "Beginner",
    summary: "Select HTML elements with querySelector and update content dynamically.",
    explanation: "Interact with the document tree via `document.querySelector` and modify classes using `.classList`.",
    code: `// Select element by ID or class
const appHeading = document.querySelector('h1');
console.log("Selected Heading tag:", appHeading?.tagName);

// Create element dynamically
const newBadge = document.createElement('span');
newBadge.textContent = "Verified Student";
newBadge.className = "badge";
console.log("Created element:", newBadge.outerHTML);`,
    tips: "Always check if `querySelector` returned an element before accessing its properties."
  },
  {
    id: "js-21",
    title: "21. Event Handling & Delegation",
    category: "DOM",
    difficulty: "Intermediate",
    summary: "Listen to clicks, keyboard events, and prevent default form reloads.",
    explanation: "Add listeners with `addEventListener('click', handler)` and use `event.preventDefault()`.",
    code: `function handleButtonClick(event) {
  console.log("Button clicked target:", event.target.tagName);
}

console.log("Event listener registered successfully");`,
    tips: "Use event delegation on container elements to handle dynamic child clicks efficiently."
  },
  {
    id: "js-22",
    title: "22. Promises & Asynchronous Execution",
    category: "Asynchronous",
    difficulty: "Intermediate",
    summary: "Handle asynchronous success and errors with Promises.",
    explanation: "Promises represent values available now, later, or never (`resolve` / `reject`).",
    code: `const checkExamResult = (mark) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (mark >= 50) {
        resolve("Passed with score: " + mark);
      } else {
        reject(new Error("Failed: mark is below 50"));
      }
    }, 400);
  });
};

checkExamResult(85)
  .then(res => console.log("Promise Success:", res))
  .catch(err => console.error("Promise Error:", err.message));`,
    tips: "Always include a `.catch()` block to prevent unhandled promise rejection errors."
  },
  {
    id: "js-23",
    title: "23. `async / await` Modern Syntax",
    category: "Asynchronous",
    difficulty: "Intermediate",
    summary: "Write asynchronous code with synchronous readability using async/await.",
    explanation: "`await` pauses execution until a promise resolves, allowing clean `try...catch` blocks.",
    code: `async function fetchStudentReport() {
  try {
    console.log("Fetching student database...");
    const report = await new Promise(res => {
      setTimeout(() => res({ id: 101, name: "Ravi", status: "Active" }), 300);
    });
    console.log("Fetched Report:", report);
  } catch (err) {
    console.error("Fetch Error:", err.message);
  }
}

fetchStudentReport();`,
    tips: "Remember that `async` functions always return a Promise."
  },
  {
    id: "js-24",
    title: "24. Web Storage API (`localStorage`)",
    category: "Browser APIs",
    difficulty: "Beginner",
    summary: "Save data persistently in the browser across page reloads.",
    explanation: "`localStorage.setItem` stores string key-value pairs persistently.",
    code: `// Store student record
const studentData = { name: "Ravi", score: 85, course: "JS" };
localStorage.setItem("my_student", JSON.stringify(studentData));

// Retrieve student record
const loaded = JSON.parse(localStorage.getItem("my_student"));
console.log("Loaded from localStorage:", loaded);
console.log("Student Name is:", loaded?.name);`,
    tips: "Always parse JSON with `try...catch` when reading from `localStorage`."
  },
  {
    id: "js-25",
    title: "25. Event Loop & Microtask Priority",
    category: "Advanced JS",
    difficulty: "Advanced",
    summary: "Understand Call Stack, Microtasks (Promises), and Macrotasks (Timers).",
    explanation: "Synchronous code runs first, followed by microtasks (`Promise.then`), and lastly macrotasks (`setTimeout`).",
    code: `console.log("1. Sync Start");

setTimeout(() => {
  console.log("4. Macrotask (setTimeout)");
}, 0);

Promise.resolve().then(() => {
  console.log("3. Microtask (Promise)");
});

console.log("2. Sync End");`,
    tips: "Microtasks always empty completely before the browser executes the next macrotask."
  }
];

// 5 Skill Check Quiz Questions for JavaScript
window.jsQuiz = [
  {
    question: "What is the output of `var x = 10; var x = 20; console.log(x);`?",
    options: ["SyntaxError", "10", "20", "undefined"],
    correctAnswer: 2,
    explanation: "var allows redeclaration in the same scope, so x becomes 20."
  },
  {
    question: "What does `const [a, b] = [10, 20]` do?",
    options: [
      "Assigns a = 10 and b = 20 via Array Destructuring",
      "Creates an array with 10 and 20",
      "Calculates the difference between 10 and 20",
      "Throws a syntax error"
    ],
    correctAnswer: 0,
    explanation: "Array destructuring binds the first item (10) to a, and the second (20) to b."
  },
  {
    question: "In arrow functions, when can you omit curly braces and the 'return' keyword?",
    options: [
      "Never",
      "When the body is a single expression (Implicit return)",
      "Only when taking zero arguments",
      "Only inside class constructors"
    ],
    correctAnswer: 1,
    explanation: "Single expression arrow functions like `(a, b) => a + b` implicitly return the evaluated value."
  },
  {
    question: "How do you instantiate a new instance of an ES6 class named `data`?",
    options: ["data.create()", "new data('Ravi', 20, 85)", "class(data)", "data()"],
    correctAnswer: 1,
    explanation: "The `new` keyword invokes the constructor method of the class to create a new instance."
  },
  {
    question: "What is the second highest number in array `[25, 60, 10, 80, 45, 70]`?",
    options: ["60", "70", "80", "45"],
    correctAnswer: 1,
    explanation: "The highest number is 80, and the second highest number is 70."
  }
];
