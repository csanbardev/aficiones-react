
import { Routes, Route } from 'react-router-dom'
import { Index } from './components/Index'
import { MovieList } from './components/MovieList'
import { SerieList } from './components/SerieList'
import { AnimeList } from './components/AnimeList'


export function App() {
 

  return (


    <>
      <Routes>
        <Route path="/aficiones-react" element={<Index />}/>
        <Route path="aficiones-react/movies" element={<MovieList />}/>
        <Route path="aficiones-react/series" element={<SerieList />}/>
        <Route path="aficiones-react/animes" element={<AnimeList />}/>
      </Routes>
     
    </>
  )
}

