const numbersOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '')

const personalMovie = {
  count: 2,
  movie: {},
  actors: {},
  generes: [],
  privat: false
}

const a = prompt('Один из последних просмотренных фильмов?');
const b = prompt('На сколько оцените его?');
const c = prompt('Один из последних просмотренных фильмов?');
const d = prompt('На сколько оцените его?');

personalMovie.movie[a] = b;
personalMovie.movie[c] = d;

console.log(personalMovie);