class Data {
    constructor(pId, name, age) {
        this.pId = pId;
        this.name = name;
        this.age = age;
    }
}

const persons = [
    new Data(1, "Alen", 39),
    new Data(2, "Deena", 47),
    new Data(3, "Diana", 21),
    new Data(4, "Jack", 54),
    new Data(5, "Jain", 23),
    new Data(6, "Kelvin", 61),
    new Data(7, "Louis", 69),
    new Data(8, "Rex", 49)
];

function displayTable(data) {
    const tableContainer = document.getElementById('table-container');
    let table = '<table border="1"><tr><th>P-Id</th><th>Name</th><th>Age</th></tr>';
    data.forEach(person => {
        table += `<tr><td>${person.pId}</td><td>${person.name}</td><td>${person.age}</td></tr>`;
    });
    table += '</table>';
    tableContainer.innerHTML = table;
}
function firstDisplay(){
    displayTable(persons);
}

function sortPersons() {
    persons.sort((a, b) => b.age - a.age); 
    displayTable(persons);
}

function find() {
    const pId = parseInt(document.getElementById('pId').value);
    const foundPerson = persons.find(person => person.pId === pId);
    const foundDiv = document.getElementById('found');
    if (foundPerson) {
        foundDiv.innerHTML = `Found: ${foundPerson.name}, ${foundPerson.age}`;
    } else {
        foundDiv.innerHTML = 'Person not found';
    }
}

function filter() {
    const minAge = parseInt(document.getElementById('min').value);
    const maxAge = parseInt(document.getElementById('max').value);
    let filteredPersons = [];
    let person = new Data();
    persons.forEach(person => {
        if (person.age >= minAge && person.age <= maxAge) {
            filteredPersons.push(person);
        }
    });
    displayTable(filteredPersons);
    console.log(filteredPersons);
}
