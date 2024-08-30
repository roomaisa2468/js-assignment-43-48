function showMessage(mobileName) {
    alert("You clicked on " + mobileName);
}
////// ques 2 
function showMessage(mobileName) {
    alert("You clicked on " + mobileName);
}
//ques 3
const students = [
    { name: "Ali", age: 20, grade: "A" },
    { name: "hussain", age: 22, grade: "B" },
    { name: "Charlie", age: 23, grade: "C" },
    { name: "David", age: 21, grade: "B" },
    { name: "Elisha", age: 20, grade: "A" },
    { name: "Frank", age: 22, grade: "C" },
    { name: "Haley Noor", age: 21, grade: "B" },
    { name: "Zayn", age: 23, grade: "A" },
    { name: "Aryan", age: 20, grade: "A" },
    { name: "Jack", age: 22, grade: "C" }
];

// Function to render the table
function renderTable() {
    const tbody = document.querySelector('#studentTable tbody');
    tbody.innerHTML = ''; // Clear existing rows

    students.forEach((student, index) => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${student.name}</td>
            <td>${student.age}</td>
            <td>${student.grade}</td>
            <td><button onclick="deleteRow(${index})">Delete</button></td>
        `;
        
        tbody.appendChild(row);
    });
}

// Function to delete a row
function deleteRow(index) {
    students.splice(index, 1); 
    renderTable(); 
}

// Initial render
renderTable();

//ques 4

function changeImage() {
    document.getElementById('img-1').src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrI09yPtfuHOeOEoZO0YOQOJz-VTSE9s5tcqEKCx-9yqtvJ6pjXGNB1ZAvjsJBNFW87V8&usqp=CAU';
}

function resetImage() {
    document.getElementById('img-1').src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpQn6PqnDdQiUbe8hKk8vgL0UKWuw-Le97YwRPH0hhsnqYCxNf1x2Q6bUeX4Bxrhy-B_E&usqp=CAU';
}
//ques 5

let counter = 0;

function updateCounter() {
    document.getElementById('counterValue').textContent = counter;
}

document.getElementById('increaseButton').addEventListener('click', () => {
    counter++;
    updateCounter();
});

document.getElementById('decreaseButton').addEventListener('click', () => {
    counter--;
    updateCounter();
});
