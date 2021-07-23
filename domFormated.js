import { int2roman } from './roman.js'
import { restartAnimation } from './restart-animation.js'

export const setMovieDetails = (element, episode_id = 0, title = '', text = '') => {
  element.innerText = `
      Episode - ${int2roman(episode_id)}
      ${title.toUpperCase()}
      
      ${text}
  `
}

export const setMovieList = (movie, element, preElement) => {
  const li = document.createElement('li');
  li.innerText = `Episode ${int2roman(movie.episode_id).padEnd(3, ' ')} - ${movie.title}`;

  li.addEventListener('click', () => {
      setMovieDetails(preElement, movie.episode_id, movie.title, movie.opening_crawl);
      restartAnimation(preElement);
  })
  element.appendChild(li);
}