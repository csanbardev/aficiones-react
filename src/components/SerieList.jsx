import { useState, useEffect } from 'react'
import * as API from '../services/movieDB'
import '../css/main.css'
import { Header } from './Header'
import { Footer } from './Footer'

export function SerieList(props) {
  const [series, setSeries] = useState([])

  useEffect(() => {
    API.getAllSeries().then(setSeries).catch(console.log)
  }, [])


  return (
    <>
      {props.visibleItems != undefined ? null : (<Header />)}
      <h2 class="section-title extra-margin">Series favoritas</h2>
      <section class="gallery extra-margin">
        {series.slice(0, props.visibleItems).map((serie) => (

          <article key="serie.id" class="card">
            <img src={`https://image.tmdb.org/t/p/w500/${serie.poster_path}`} alt={`Poster de la peli ${serie.name}`} class="card-image" />
            <h3 class="card-title">{serie.name}</h3>
          </article>
        ))}
      </section>
      {props.visibleItems != undefined ? null : (<Footer />)}
    </>
  )
}