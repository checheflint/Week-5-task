
//1

var firstName = 'Echetanna';
var lastName = 'Nwankwo';
let internName = firstName + ' ' + lastName
const taskOne = 10;
const taskTwo = 8;
const taskThree = 6;


//2

//Calculate the total score
let total = taskOne + taskTwo + taskThree;


//Calculate average 
let average = total/3;
let averageRounded = average.toFixed(2);


// 3. Determine the Grade using if-else:
let grade;
if (average >= 9) { 
    grade = 'A';
} else if (average >= 8) {
    grade = 'B';
} else if (average >= 7) {
    grade = 'C';
} else if (average >= 6) {
    grade = 'D';
} else {
    grade = 'E'
}

//Message based on grade
let message;
switch (grade) {
    case 'A':
    message = 'Excellent performance!';
    break;

    case 'B':
    message = 'Great job! Keep aiming high.';
    break;

    case 'C':
    message = 'Good effort. Try to improve.';
    break;

    case 'D':
    message = "Don't give up. You can do better next time.";
    break;

    default:
    message = "Invalid grade";
}

//Display using template literals
let output = `
Student name: ${internName}
Task one score: ${taskOne}
Task two score: ${taskTwo}
Task three score: ${taskThree}
Average: ${averageRounded}
Final grade: ${grade}
Remark: ${message}
`
console.log(output)
