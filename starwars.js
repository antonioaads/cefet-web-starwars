// Seu javascript aqui :)
// Use a Star Wars API: https://swapi.dev/
// para fazer uma requisição assíncrona e:
//  - Pegar a lista de filmes (AJAX) e preencher no HTML
//  - Quando um filme for clicado, exibir sua introdução

const API_ENDPOINT = 'https://swapi.dev/api'

// Exercício 1
import { AudioPlayer } from "./music.js"
//import { AudioPlayer } from "./music-sem-private.js"

const audioPlayer = new AudioPlayer()
audioPlayer.start(
  { 
    audioUrl: 'audio/tema-sw.mp3', 
    coverImageUrl:'imgs/logo.svg', 
    title: 'Intro', 
    artist: 'John Williams' 
  }, 
  document.body
)

//Exercício 2
import { friendlyFetch } from './friendly-fetch.js'
import { int2roman } from './roman.js'

const movieList = document.querySelector('#filmes ul')

const swMovies = await friendlyFetch(API_ENDPOINT + '/films')
  .then(res => res.results);

swMovies.forEach(movie => {
  const li = document.createElement('li')
  li.innerText = `Episode ${int2roman(movie.episode_id)} - ${movie.title}`
  
  movieList.appendChild(li)
})