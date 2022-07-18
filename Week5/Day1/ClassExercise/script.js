// Exercise # JSON
// # Exercise with JSON
// 1. Parse this JSON string into a JS object
// 2. Use array or object methods to display THE VALUES OF THE OPTIONS OF THE FIRST SPORT QUESTION
// 3. Create another variable to stringify the JS object. Console.log the variable
// 4. Then use pretty print (look at the lesson)

let jsonString = `
{
    "quiz": {
        "sport": {
            "q1": {
                "question": "Which one is correct team name in NBA?",
                "options": [
                    "New York Bulls",
                    "Los Angeles Kings",
                    "Golden State Warriros",
                    "Huston Rocket"
                ],
                "answer": "Huston Rocket"
            }
        },
        "maths": {
            "q1": {
                "question": "5 + 7 = ?",
                "options": [
                    10,
                    11,
                    12,
                    13
                ],
                "answer": 12
            },
            "q2": {
                "question": "12 - 8 = ?",
                "options": [
                    1,
                    2,
                    3,
                    4
                ],
                "answer": 4
            }
        }
    }
}`;

const manipulateJson = (function () {
  let quizObj = JSON.parse(jsonString);
  let retrieveAllOptions = quizObj["quiz"]["sport"]["q1"]["options"];

  //obj destructuring
  // const {
  // 	quiz :
  // 		{sport :
  // 			{ q1 :
  // 				{options}
  // 			}
  // 		}
  // 	}  = quizObj

  // retrieveAllOptions.forEach((element) => console.log(element))

  //stringify - converts a JS object to a JSON string
  // null in the stringify method means that the JSON string needs to contains
  // exactly the same values as the JS object
  let stringQuiz = JSON.stringify(quizObj, null, 2);
  console.log(stringQuiz);
})();
