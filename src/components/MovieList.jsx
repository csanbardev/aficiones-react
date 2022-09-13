import { useState, useEffect } from 'react'
import * as API from '../services/movieDB'
import '../css/main.css'
import { Header } from './Header'
import { Footer } from './Footer'

export function MovieList(props) {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    API.getAllMovies().then(setMovies).catch(console.log)
  }, [])


  return (
    <>
      {props.visibleItems != undefined ? null : (<Header />)}
      <h2 class="section-title extra-margin">Películas favoritas</h2>
      <section class="gallery extra-margin">
        {movies.slice(0, props.visibleItems).map((movie) => (

          <article key="movie.id" class="card">
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={`Poster de la peli ${movie.title}`} class="card-image" />
            <h3 class="card-title">{movie.title}</h3>
          </article>
        ))}
      </section>
      {props.visibleItems != undefined ? null : (<Footer />)}
    </>
  )
}