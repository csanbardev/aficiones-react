import { useState, useEffect } from 'react'
import * as API from '../services/movieDB'
import '../css/main.css'
import { Header } from './header/header'
import { Footer } from './Footer'

export function AnimeList(props){
  const [animes, setAnimes] = useState([])
  const visibleItems = props
  useEffect(() => {
    API.getAllAnimes().then(setAnimes).catch(console.log)
  }, [])

  
  return (
    <>
    {props.visibleItems != undefined ? null : (<Header />)}
      <h2 class="section-title extra-margin">Animes favoritos</h2>
      <section class="gallery extra-margin">
        {animes.slice(0,props.visibleItems).map((anime) => (
          
          <article key="anime.id" class="card">
            <img src={`https://image.tmdb.org/t/p/w500/${anime.poster_path}`} alt={`Poster de la peli ${anime.name}`} class="card-image" />
            <h3 class="card-title">{anime.name}</h3>
          </article>
        ))}
      </section>
      {props.visibleItems != undefined ? null : (<Footer />)}
    </>
  )
}