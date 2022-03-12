import React,{ useContext } from 'react'
import { MovieContext } from '../contexts/MovieContext'


const ResultCard = ({ movie }) => {

    const { addMovieToWatchList,addMovieToWatched } = useContext(MovieContext);

    return (
        <div className='result_card card d-flex flex-row align-items-center shadow'>
            <div className="poster_wrapper">
                <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt="" width="100px" className='mr-3' />
            </div>
            <div className="movie_info d-flex flex-column">
                <h3 className="title">{movie.title}</h3>
                <h4 className="release_date text-secondary">
                    {movie.release_date}
                </h4>
                <div className="buttons">
                    <button className='btn btn-success btn-sm mr-2' onClick={() => addMovieToWatchList(movie)}>Add to Watchlist</button>
                    <button className='btn btn-success btn-sm' onClick={() => addMovieToWatched(movie)}>Add to Watched</button>
                </div>
            </div>

        </div>
    )
}

export default ResultCard