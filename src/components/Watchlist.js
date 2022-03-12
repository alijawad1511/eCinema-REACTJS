import React,{ useContext } from 'react'
import { MovieContext } from '../contexts/MovieContext'
import Movie from './Movie';

const Watchlist = () => {

    const { watchList } = useContext(MovieContext);

    return (
        <>
            <h3 className='py-3 px-2 mt-3 text-primary bg-light font-weight-bold'>Movies Watchlist</h3>
            <div className="movies_list d-flex flex-wrap">
                {watchList.map((movie) => {
                    return <Movie key={movie.id} movie={movie} />
                })}
            </div>
        </>
    )
}

export default Watchlist