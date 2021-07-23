// Seu javascript aqui :)
// Use a Star Wars API: https://swapi.dev/
// para fazer uma requisição assíncrona e:
//  - Pegar a lista de filmes (AJAX) e preencher no HTML
//  - Quando um filme for clicado, exibir sua introdução

const API_ENDPOINT = 'https://swapi.dev/api'

// Configuração do player de áudio
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

// Listagem e detalhes dos filmes
import { friendlyFetch } from './friendly-fetch.js'
import { restartAnimation } from './restart-animation.js'
import { setMovieDetails, setMovieList } from './domFormated.js'

const preElement = document.querySelector('pre')
const movieListElement = document.querySelector('#filmes ul')

const swMovies = await friendlyFetch(API_ENDPOINT + '/films')
  .then(res => res.results.sort((m1, m2) => m1.episode_id - m2.episode_id))
  .catch(() => []);

// // Preenchimento inicial
if(swMovies && swMovies[0]){
  setMovieDetails(preElement, swMovies[0]);
}

swMovies.forEach(movie => {
  setMovieList(movie, movieListElement, preElement);
})