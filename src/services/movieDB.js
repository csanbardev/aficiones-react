const apiKey = '0e4cfc04d479a7dbfbe343c84f70e32d'
const sessionID = '2c0dcd7e821582961c2aed98d9ff4ffc91e5815c'
const movieListId = '8209603'
const serieListId = '8209604'
const animeListId = '8209602'



export async function getAllMovies(){
  try{
    const url = `https://api.themoviedb.org/4/list/${movieListId}?language=es-ES&api_key=${apiKey}`

    const res = await fetch(url)
    const data = await res.json()
    return data.results
  }catch(error){
    console.log(error)
  }
}

export async function getAllSeries(){
  try{
    const url = `https://api.themoviedb.org/4/list/${serieListId}?language=es-ES&api_key=${apiKey}`

    const res = await fetch(url)
    const data = await res.json()
    return data.results
  }catch(error){
    console.log(error)
  }
}

export async function getAllAnimes(){
  try{
    const url = `https://api.themoviedb.org/4/list/${animeListId}?language=es-ES&api_key=${apiKey}`

    const res = await fetch(url)
    const data = await res.json()
    return data.results
  }catch(error){
    console.log(error)
  }
}