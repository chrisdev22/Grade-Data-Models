const assignmentOneId = shortid.generate();
const assignmentTwoId = shortid.generate();
const assignmentThreeId = shortid.generate();
const assignmentFourId = shortid.generate();

// All credits go to Jon Taylor (Facilitator) for creating the walkthrough.
// Thank you!

let classroom = {
  name: "Intro to JavaScript",
  teacher: {
    name: "Mr J.",
  },
  students: [
    {
      id: shortid.generate(),
      firstName: "Joe",
      lastName: "Duggins",
      assignmentGrades: [
        {
          assignmentId: assignmentOneId,
          score: 5
        },
        {
          assignmentId: assignmentTwoId,
          score: 8
        },
        {
          assignmentId: assignmentThreeId,
          score: 6
        },
        {
          assignmentId: assignmentFourId,
          score: 27
        }
      ]
    },
    {
      id: shortid.generate(),
      firstName: "Sarah",
      lastName: "Crate",
      assignmentGrades: [
        {
          assignmentId: assignmentOneId,
          score: 3
        },
        {
          assignmentId: assignmentTwoId,
          score: 5
        },
        {
          assignmentId: assignmentThreeId,
          score: 7
        },
        {
          assignmentId: assignmentFourId,
          score: 20
        }
      ]
    },
    {
      id: shortid.generate(),
      firstName: "Sandra",
      lastName: "Blaggins",
      assignmentGrades: [
        {
          assignmentId: assignmentOneId,
          score: 5
        },
        {
          assignmentId: assignmentTwoId,
          score: 10
        },
        {
          assignmentId: assignmentThreeId,
          score: 9
        },
        {
          assignmentId: assignmentFourId,
          score: 29
        }
      ]
    },
    {
      id: shortid.generate(),
      firstName: "Harvey",
      lastName: "Manns",
      assignmentGrades: [
        {
          assignmentId: assignmentOneId,
          score: 1
        },
        {
          assignmentId: assignmentTwoId,
          score: 4
        },
        {
          assignmentId: assignmentThreeId,
          score: 6
        },
        {
          assignmentId: assignmentFourId,
          score: 20
        }
      ]
    },
    {
      id: shortid.generate(),
      firstName: "Monica",
      lastName: "Woolsley",
      assignmentGrades: [
        {
          assignmentId: assignmentOneId,
          score: 4
        },
        {
          assignmentId: assignmentTwoId,
          score: 7
        },
        {
          assignmentId: assignmentThreeId,
          score: 6
        },
        {
          assignmentId: assignmentFourId,
          score: 22
        }
      ]
    },
    {
      id: shortid.generate(),
      firstName: "Tyrese",
      lastName: "Jenkins",
      assignmentGrades: [
        {
          assignmentId: assignmentOneId,
          score: 5
        },
        {
          assignmentId: assignmentTwoId,
          score: 10
        },
        {
          assignmentId: assignmentThreeId,
          score: 9
        },
        {
          assignmentId: assignmentFourId,
          score: 29
        }
      ]
    }
  ],
  assignments: [
    {
      id: assignmentOneId,
      name: "Intro",
      pointsPossible: 5,
    },
    {
      id: assignmentTwoId,
      name: "Lesson 1",
      pointsPossible: 10,
    },
    {
      id: assignmentThreeId,
      name: "Lesson 2",
      pointsPossible: 10,
    },
    {
      id: assignmentFourId,
      name: "Final",
      pointsPossible: 30,
    }
  ]
};


// -----------------------------------------------------------------------------------
// Here are a few functions to get you started:

// A failing grade is less than 70 %
const FAILING_GRADE_PERCENTAGE = 70;

// Given a grade Percentage, this will return true of false if that is a failing grade
function isFailingGrade(gradePercentage) {
  return gradePercentage < FAILING_GRADE_PERCENTAGE;
}

// Given a number of points and a total possible number of points, this will return the grade percentage
// From 0 - 100
function getGradePercentage(points, totalPossiblePoints) {
  return Math.round((points / totalPossiblePoints) * 100);
}

// Given a grade percentage, this will return a letter grade: A, B, C, D, or F
function getLetterGrade(gradePercentage) {
  if (gradePercentage > 89) {
    return "A";
  } else if (gradePercentage > 79) {
    return "B";
  } else if (gradePercentage > 69) {
    return "C";
  } else if (gradePercentage > 59) {
    return "D";
  } else {
    return "F";
  }
}

// Given a maximum score, this will return a random integer between 0 and that number
// (This is used down below in the addStudent and addAssignment code)
function getRandomScore(maxScore) {
  return Math.round((Math.random() * maxScore));
}

// -----------------------------------------------------------------------------------
// Complete the following functions:

// Given a student ID, return the student's object
function getStudentById(studentId) {
  return classroom.students.find( student => student.id === studentId)
}

// Given an assignment ID, return the assignment's object
function getAssignmentById(assignmentId) {
  return classroom.assignments.find( assignment => assignment.id === assignmentId)
}

// Add together the pointsPossible on every assignment and return that number
function getTotalPossiblePoints() {
  // Refactored version by Jon Taylor (Facilitator)
  return classroom.assignments.reduce( (sum, assignment) => {
    return sum + assignment.pointsPossible
  }, 0 )
  // let totalPoints = 0
  // for (let assignment of classroom.assignments) {
  //   totalPoints += assignment.pointsPossible
  // }
  // return totalPoints
}

// Given a student id, add together their score for every assignment
function calculateStudentTotalPoints(studentId) {
  // Jon Taylor's Reduced Method
  let student = getStudentById(studentId)
  return student.assignmentGrades.reduce( (sum, assignment) => {
    return sum + assignment.score
  }, 0 )
  // let student = getStudentById(studentId)
  // let totalScore = 0
  // for (let assignment of student.assignmentGrades) {
  //   totalScore += assignment.score
  // }
  // return totalScore
}

// Given a student id, calculate their overall grade percentage
// Hint: get their total points, and the total possible points, and use those to getGradePercentage
function calculateStudentOverallGradePercentage(studentId) {
  let totalPoints = calculateStudentTotalPoints(studentId)
  let totalPossible = getTotalPossiblePoints()
  return getGradePercentage(totalPoints, totalPossible)
}

// Given a student id, return their letter grade
// Hint: This can call the previous function and pass it to getLetter Grade
function getLetterGradeForStudent(studentId) {
  let percentage = calculateStudentOverallGradePercentage(studentId)
  return getLetterGrade(percentage)
}

// calculate the average overall grade of all of the students in the classroom
// Get the grade percentage of each student and add them all together
// Divide that by the total number of students
function calculateAvgGradePercentageInClassroom() {
  // Jon Taylor's Reduced Pattern
  let totalGradePercent = classroom.students.reduce( (sum, student) => {
    return sum + calculateStudentOverallGradePercentage(student.id)
  }, 0 )

  return totalGradePercent / classroom.students.length
  // let totalGradePercent = 0
  // for (let student of classroom.students) {
  //   totalGradePercent += calculateStudentOverallGradePercentage(student.id)
  // }
}

// -----------------------------------------------------------------------------------
// Rendering the Gradebook - Complete the following render functions using the 
// functions you have completed above
// Replace Any **Value** with the actual value (anything with double star ** around it.)

// Given a list of assignment grades (student.assignmentGrades) render each assignments and the score
function renderAssignmentsGrades(assignmentGrades) {
  let html = "<ul>";

  for (let assignmentGrade of assignmentGrades) {
    let {assignmentId, score} = assignmentGrade
    let {name, pointsPossible} = getAssignmentById(assignmentId)
    html += `<li>${name} - ${score}/${pointsPossible}</li>`
  }
  
  html += "</ul>"
  return html;
}

// Given a list of students (classroom.students) render each student
function renderStudents(students) {

  let html = `<ul class="studentList">`
  html += `<div class="studentListTitle">Students</div>`;

  for (let student of students) {
    // Hint: Only render the <span class="warning"></span> if the student's overall grade isFailingGrade().  A ternary would be great here...
    
    let letterGrade = getLetterGradeForStudent(student.id)
    let gradePercentage = calculateStudentOverallGradePercentage(student.id)

    // Writing down my first ternary with a glorified if statement.
    // I'm in awe as of how this is done with a <span></span> in quotes.
    // This is extremely useful to learn.

    html += `
      <li>
        <div><strong>${student.firstName} ${student.lastName}</strong></div>
        <div>Grade: ${letterGrade} - ${gradePercentage} ${ isFailingGrade(gradePercentage) ? '<span class="warning"></span>' : '' }</div>
        <div>Assignment Scores:</div>
        ${renderAssignmentsGrades(student.assignmentGrades)}
      </li>
    `;
  }

  html += `</ul>`;
  return html;
}

// Render the entire Gradebook
function renderGradebook() {
  let gradebook = document.getElementById("gradebook");
  gradebook.innerHTML = "";

  let html = `
    <header>
      <h2>Gradebook</h2>
      <h4>${classroom.name} with ${classroom.teacher.name}</h4>
      <h4>Number of Assignments: ${classroom.assignments.length}</h4>
      <h4>Average Grade Percentage: ${calculateAvgGradePercentageInClassroom()}</h4>
    </header>
    ${renderStudents(classroom.students)}
  `;
  gradebook.innerHTML = html;
}

renderGradebook();

// -----------------------------------------------------------------------------------
// Adding a student and assignment - This is already completed for you

function addStudent(firstName, lastName) {
  let student = {
    id: shortid.generate(),
    firstName: firstName,
    lastName: lastName,
    assignmentGrades: []
  }

  // Give the student a random score for each assignment
  for (let assignment of classroom.assignments) {
    student.assignmentGrades.push({
      assignmentId: assignment.id,
      score: getRandomScore(assignment.pointsPossible)
    })
  }

  classroom.students.push(student);
}

function addAssignment(name, pointsPossible) {
  let assignment = {
    id: shortid.generate(),
    name: name,
    pointsPossible: pointsPossible
  };

  // Give each student a random score for this assignment
  for (let student of classroom.students) {
    student.assignmentGrades.push({
      assignmentId: assignment.id,
      score: getRandomScore(assignment.pointsPossible)
    });
  }

  classroom.assignments.push(assignment);
}

let addStudentForm = document.getElementById("addStudentForm");
addStudentForm.onsubmit = function(event) {
  event.preventDefault();

  let firstNameInput = document.getElementById("studentFirstName");
  let lastNameInput = document.getElementById("studentLastName");
  if (firstNameInput.value && lastNameInput.value) {
    addStudent(firstNameInput.value, lastNameInput.value);
    renderGradebook();
    firstNameInput.value = "";
    lastNameInput.value = "";
  }
}

let addAssignmentForm = document.getElementById("addAssignmentForm");
addAssignmentForm.onsubmit = function(event) {
  event.preventDefault();
  let nameInput = document.getElementById("assignmentName");
  let pointsPossibleInput = document.getElementById("assignmentPoints");
  if (nameInput.value && pointsPossibleInput.value) {
    addAssignment(nameInput.value, parseInt(pointsPossibleInput.value));
    renderGradebook();
    nameInput.value = "";
    pointsPossibleInput.value = "";
  }
}
