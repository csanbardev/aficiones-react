import { MovieList } from '../components/MovieList'
import { AnimeList } from '../components/AnimeList'
import { SerieList } from '../components/SerieList'
import { ShowMore } from './buttons/ShowMore'


export function Main() {
  

  return (
    <>
      <main>
        <MovieList visibleItems={5} />
        <ShowMore path={'movies'}/>
        <SerieList visibleItems={5} />
        <ShowMore path={'series'}/>
        <AnimeList visibleItems={5}/>
        <ShowMore path={'animes'}/>
      </main>
    </>
  )
}