let person = [
    {
        name: "Ram",
        age: 30,
        occupation: "Software Engineer"
    },
    {
        name: "Shyam",
        age: 20,
        occupation: "Software Developer"
    },
    {
        name: "Mohan",
        age: 35,
        occupation: "CEO"
    }, 
    {
        name: "Sohan",
        age: 38,
        occupation: "COO"
    }
];

function printPerson(person) {
    let keys = Object.keys(person);
    for (let i = 0; i < keys.length; i++) {
        console.log(keys[i] + ": " + person[keys[i]]);
    }
}

for (let i = 0; i < person.length; i++) {
    printPerson(person[i]);
}
