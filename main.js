let yourName = prompt('What is your name?')
let favoriteMovie = prompt('What is your favorite movie?')
let favoriteFood = prompt('What is your favorite food')
// We use ES6 new string literal to build our confirmation message back to the user
confirm(`${yourName} your favorite movie is ${favoriteMovie} and you love ${favoriteFood}`)
// In the below line, we string concatenation to build the confirmation message. This is another way to write the same thing as above.
// let allAnswers = yourName + ' ' + 'your favorite movie is ' + ' ' + favoriteMovie + ' ' + 'and you love' + ' ' + favoriteFood
console.log(`${yourName} your favorite movie is ${favoriteMovie} and you love ${favoriteFood}`)
// confirm(allAnswers)
