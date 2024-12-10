// Student Grade Generator

function getGrade(marks) {
    if (marks >= 80 && marks <= 100) {
        return 'A';
    } else if (marks >= 60 && marks < 80) {
        return 'B';
    } else if (marks >= 50 && marks < 60) {
        return 'C';
    } else if (marks >= 40 && marks < 50) {
        return 'D';
    } else if (marks < 40 && marks >= 0) {
        return 'E';
    } else {
        return 'Invalid Marks';
    }
}

// Prompt the user for input
const marks = prompt("Enter student marks (0 - 100): ");
const grade = getGrade(parseInt(marks));

console.log(`Grade: ${grade}`);
