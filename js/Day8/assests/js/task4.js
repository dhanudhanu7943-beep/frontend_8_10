let students = [
    { name: "Dhanu", mark: 85 },
    { name: "Priya", mark: 75 },
    { name: "Kavi", mark: 90 },
    { name: "Ravi", mark: 65 },
    { name: "Anu", mark: 88 }
];

for (let i = 0; i < students.length; i++) {
    if (students[i].mark > 80) {
        console.log(students[i].name);
    }
}