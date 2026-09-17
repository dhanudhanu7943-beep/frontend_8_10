let students = [];

let button = document.getElementById("addStudent");

button.addEventListener("click", function () {

    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let city = document.getElementById("city").value;

    let student = {
        name: name,
        age: age,
        city: city
    };

    students.push(student);

    let studentList = document.getElementById("studentList");

    studentList.innerHTML = "";

    students.forEach(function(student) {

        let div = document.createElement("div");

        div.innerHTML = `
            <p>Name: ${student.name}</p>
            <p>Age: ${student.age}</p>
            <p>City: ${student.city}</p>
            <hr>
        `;

        studentList.appendChild(div);
    });
});
//*Task2*//

let employees = [];

let form = document.getElementById("employeeForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let department = document.getElementById("department").value;
    let salary = document.getElementById("salary").value;

    let employee = {
        name: name,
        department: department,
        salary: salary
    };

    employees.push(employee);

    let table = document.getElementById("employeeTable");

    table.innerHTML = "";

    employees.forEach(function(employee) {

        let row = document.createElement("tr");

        row.innerHTML = `
            <td>${employee.name}</td>
            <td>${employee.department}</td>
            <td>${employee.salary}</td>
        `;

        table.appendChild(row);

    });

    form.reset();

});


