// Exercise 1 : The World Translator
// Instructions
// Hint: Use Switch Case

// Ask the user which language they speak.

// Convert the user’s answer to lowercase, so that all the user’s inputs will be accepted in the if statement. For example “english” or “English” or “ENGlish” ect…”

// Create a few conditions :
// If the user speaks French : display “Bonjour”
// If the user speaks English : display “Hello”
// If the user speaks Hebrew : display “Shalom”
// If the user doesn’t speak any of these 3 languages: display ‘01110011 01101111 01110010 01110010 01111001’


// let userAnswer = prompt("Which language do you speak?").toLowerCase();

// switch(userAnswer) {
// 	case "english" :
// 		alert("Hello")
// 		break;
// 	case "french" :
// 		alert("Bonjour")
// 		break;
//     case "hebrew" :
//     alert("Shalom")
//         break;
// 	default:
// 		alert("01110011 01101111 01110010 01110010 01111001")
// }

// Exercise 2 : The Grade Assigner
// Instructions
// Ask the user for their grade.
// If the grade is bigger than 90, console.log “A”
// If the grade is between 80 and 90 (included), console.log “B”
// If the grade is between 70(included) and 80 (included), console.log “C”
// If the grade is lower than 70, console.log “D”

let userGrade = prompt("What is your grade?");

if(userGrade>90){
    console.log("A");
} else if(userGrade>80 && userGrade <=90){
    console.log("B");
}else if(userGrade>= 70 || userGrade <=80){
    console.log("c");
}else if(userGrade<70){
    console.log("D");
};

