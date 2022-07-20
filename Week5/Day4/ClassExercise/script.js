// Exercise
// # Async Await
// Exercise Game - The word game
// You need to create 4 functions, each of them return a promises
// 1. The 1st function, receives 2 famous persons name from the user -
// if the names are not a string -> reject
// else - resolve with the name of the 2 ppl
// 2. The 2nd function, receives a noun
// if the noun is less than 3 letters - reject
// else - resolve with the noun
// 3. The 3rd function, receives a city
// if the city doesn't start with an uppercase letter -> reject
// else - resolve with the city name
// 4. The 4st function, receives a verb (finishing with "ing")
//  if it doesn't end with "ing" -> reject (use the endWith string method)
// else resolve with the verb
// 5. The last function, is an async function - it receives all the above promises, and return a sentence with it
// Ex: "Beyonce is playing football with Barack Obama in Paris"
// ---
// 6. Part II. BONUS
// Instead of waiting for the promises to come back resolved, look at Promise.all method
// --> running the promises in Parallel
// --> check the difference of performance with performance.now()


async function getNames(fnOne,fnTwo) {
    if(typeof fnOne !== "string" || typeof fnTwo !== "string") {
        throw new Error("not a string")
    } else {
        return [fnOne,fnTwo];
    }

}

async function getNoun(noun) {
    if(noun.length <= 3) {
        throw new Error("too small")
    } else {
        return noun
    }
}


async function getCity(city){
    if(city.charAt(0) === city.charAt(0).toUpperCase()){
        return city
    } else {
        throw new Error("not good city")
    }
}

async function getVerb(verb){
    if (verb.endsWith("ing")) {
        return verb
    } else {
        throw new Error("not good verb")
    }
} 

async function getSentence(){
    try {
        let names = await getNames("Beyonce", "Barack Obama");
        let noun = await getNoun("fo");
        let city = await getCity("Paris");
        let verb = await getVerb("playing");
        return `${names[0]} is ${verb} ${noun} with ${names[1]} in ${city}`
    } catch(error) {
        console.log(error.message)
    }
}

getSentence()



// .then(result => console.log(result))

// throw new RangeError ("too low")
// error obj 

// stack : where the error happened
// type : type of the error
// message : msg of the error "too low"