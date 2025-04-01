import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import Videobackground from './Videobackground'

const MainContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovies)
    if (!movies) return null
    const mainMovie = movies[0];
    //console.log(mainMovie) 
    const {original_title, overview, id} = mainMovie;
  return (
    <div><VideoTitle title={original_title} overview={overview}/>
    <Videobackground movieId={id} />MainContainer</div>
  )
}

export default MainContainer