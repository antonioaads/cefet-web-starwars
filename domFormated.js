import { int2roman } from './roman.js'
import { restartAnimation } from './restart-animation.js'

export const setMovieDetails = (element, movie) => {
  const {episode_id, title, opening_crawl} = movie;
  
  element.innerText = `
      Episode - ${int2roman(episode_id)}
      ${title.toUpperCase()}
      
      ${opening_crawl}
  `;
  restartAnimation(element);
}

export const setMovieList = (movie, ulElement, preElement) => {
  const li = document.createElement('li');
  li.innerText = `Episode ${int2roman(movie.episode_id).padEnd(3, ' ')} - ${movie.title}`;

  li.addEventListener('click', () => {
      setMovieDetails(preElement, movie);
  })
  ulElement.appendChild(li);
}