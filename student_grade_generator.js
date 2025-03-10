function getStudentGrade() {
    let marks = parseFloat(prompt("Enter student marks (0 - 100):"));

    if (isNaN(marks) || marks < 0 || marks > 100) {
        alert("Invalid input! Please enter a number between 0 and 100.");
    } else if (marks > 79) {
        alert("Grade: A");
    } else if (marks >= 60) {
        alert("Grade: B");
    } else if (marks >= 50) {
        alert("Grade: C");
    } else if (marks >= 40) {
        alert("Grade: D");
    } else {
        alert("Grade: E");
    }
}

getStudentGrade();
