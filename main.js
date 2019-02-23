let yourName = prompt('What is your name?')
let favoriteMovie = prompt('What is your favorite movie?')
let favoriteFood = prompt('What is your favorite food')
// Create a variable to hold the p tag from our index.html file
let paragone = document.getElementById('para')
// Set the innerText of the p tag using the user's answers
paragone.innerText =`${yourName} your favorite movie is ${favoriteMovie} and you love ${favoriteFood}`
// // let allAnswers = yourName + ' ' + 'your favorite movie is ' + ' ' + favoriteMovie + ' ' + 'and you love' + ' ' + favoriteFood
// // confirm(`${yourName} your favorite movie is ${favoriteMovie} and you love ${favoriteFood}`)
// console.log(`${yourName} your favorite movie is ${favoriteMovie} and you love ${favoriteFood}`)
// confirm(allAnswers)
