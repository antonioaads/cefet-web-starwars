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
