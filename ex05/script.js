const person = {
    "name": "Mr. Bennett",
    "subject": "Chemistry",
    "experience": 15
}

const teachers = [
    {
        "name": "Mrs. Frost",
        "type": "Environmental Science",
        "experience": 25
    },
    {
        "name": "Mr. Cribley",
        "subject": "Biology",
        "experience": 15
    },
    {
        "name": "Mrs. Lentz",
        "subject": "Physical Science",
        "experience": 22
    },
    {
        "name": "Mr. Bennett",
        "subject": "Chemistry",
        "experience": 15
    },
]

function task1() {

}

function task2() {
    // Write some HTML to create a card display for a person.
    // When you click the button, the data from the `person`
    // object above should be filled in on the page.
    let person = {
        "name":"Paul",
        "age":"49",
        "job": "Computer Programer",
        "language": "Python and Lua",
        "expierence": "30 years",
    }
    let target = document.querySelector("#targetdiv")
    console.log(target)
    let template = `the person is ${person.name} and he has ${person.experience} years of expierence`
    let targetkey = document.createElement("p")
    targetkey.innerText = template
    target.appendChild(targetkey)
}

function task3() {

    // 1. Use the array of teachers to start a loop.
    // 2. In the loop, add a "role" property to each object as they go through the loop
    // 3. Use a template string to add a sentence about each person into the #task3 container.
    let loop = 0
    let target = document.querySelector("#newdiv")
    while (loop < teachers.length){
        let targetkey = document.createElement("p")
        let template = `${teachers[loop].name}, ${teachers[loop].subject}, ${teachers[loop].experience}`;
        targetkey.innerText = template
        target.appendChild(targetkey)
        console.log(teachers[loop]);
        loop++;
    }
    
}