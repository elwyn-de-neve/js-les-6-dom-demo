console.log( "functions are running!" );

// De referentie maken naar een bestaand HTML element
const getFirstName = document.getElementById( "first-name" );
const getLastName = document.getElementById( "last-name" );
const getEmail = document.getElementById( "email" );
const getCourse = document.getElementById( "course" );
const getGrade = document.getElementById( "grade" );

/*// Het injecteren van de data in de DOM per element
getFirstName.textContent = `${ students[0].firstName }`;
getLastName.textContent = `${ students[0].lastName }`;
getEmail.textContent = `${ students[0].email }`;
getCourse.textContent = `${ students[0].course }`;
getGrade.textContent = `${ students[0].grade }`;

//Get student by index number
const indexNumber = 1

// Het dynamisch injecteren van data in de DOM met meerdere elementen tegelijkertijd
const getAllDetails = document.getElementById('all-details');
getAllDetails.innerHTML = `
    <div class="row">
        <h3>${ students[indexNumber].firstName }</h3>
        <h3 id="last-name">${ students[indexNumber].lastName }</h3>
    </div>
    <ul class="student-details">
        <li>${ students[indexNumber].email }</li>
        <li>${ students[indexNumber].course }</li>
        <li>${ students[indexNumber].grade }</li>
    </ul>
`*/

// Format in een functie plaatsen
const studentDetailsFormat = ( currentStudent ) => {
    return `
        <div class="row">
            <h3>${ currentStudent.firstName }</h3> 
            <!-- students[i].firstname -->
            <h3 id="last-name">${ currentStudent.lastName }</h3>
        </div>
        <ul class="student-details">
            <li>${ currentStudent.email }</li>
            <li>${ currentStudent.course }</li>
            <li>${ currentStudent.grade }</li>
        </ul>
`;
};


// Zet de filter op frontend
let courseVariables = 'frontend'

// De methode om door de studenten array heen te loopen en te filteren op frontend
const getFrontendStudentDetails = students.filter(( student ) => {
    return student.course === courseVariables;
})

// Referentie maken naar ons element in HTML
const getAllStudentDetails = document.getElementById('all-students-details');

// Loopen door de array van frontend studenten en elke student in de functie plaatsen en het geheel afdrukken
for ( let i = 0; i < getFrontendStudentDetails.length; i++ ) {
    getAllStudentDetails.innerHTML += `${ studentDetailsFormat( getFrontendStudentDetails[i] ) }`
}
























