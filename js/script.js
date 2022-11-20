// 'use strict';

// let number = 1;

// number = 10;


// console.log(number(x, n));

// const yo = confirm('Are you here?');
// console.log(yo);

// const answer = prompt('Are you 18 years old?', '18');
// console.log(typeof (answer));

// function positiveSum(arr) {
//   let sum = 0
//   for (let i = 0; i < arr.length; ++i) {
//     if (arr[i] > 0)
//       sum += arr[i];
//   }
//   return sum
// }
// console.log(positiveSum([1, -4, 7, 12]));


const numberOfFilms = +prompt('How many films have you watched?', '');


const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  generes: [],
  privat: false
};

const lastFilms = prompt('One from last watched movies', '');
const retting = prompt('how would you rate them', '');
const lastFilms2 = prompt('One from last watched movies', '');
const retting2 = prompt('how would you rate them', '');

personalMovieDB.movies[lastFilms] = retting;
personalMovieDB.movies[lastFilms2] = retting2;

console.log(personalMovieDB);