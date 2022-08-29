import React from 'react'
import AddMovie from '../components/AddMovie'
import MovieList from '../components/MovieList'
import MoviesTable from '../components/MoviesTable'

const HomePage = () => {
  return (
    <div className='container'>
        <AddMovie/>
        <MovieList/>
        <MoviesTable/>
    </div>
  )
}

export default HomePage