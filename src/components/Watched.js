import React,{ useContext } from 'react'
import { MovieContext } from '../contexts/MovieContext'
import Movie from './Movie';

const Watched = () => {

    const { watched } = useContext(MovieContext);

    return (
        <>
            <h3 className='py-3 px-2 mt-3 text-primary bg-light font-weight-bold'>Watched Movies</h3>
            <div className="watched_list d-flex flex-wrap">
                {
                    watched.map((movie) => {
                        return <Movie key={movie.id} movie={movie} />
                    })
                }
            </div>
        </>
    )
}

export default Watched