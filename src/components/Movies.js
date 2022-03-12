import React,{ useState,useContext } from 'react'
import { MovieContext } from '../contexts/MovieContext'
import ResultCard from './ResultCard';

const Movies = () => {

    const { movies,searchMovies } = useContext(MovieContext);
    const [query,setQuery] = useState("");

    const onChange = async (e) => {
        e.preventDefault();
        setQuery(e.target.value);
    }

    const handleSearch = (e) => {
        e.preventDefault();
        searchMovies(query);
        setQuery("");
    }

    return (
        <>
            <div className='py-3 px-2 mt-3 mb-3 bg-light d-flex justify-content-center align-items-center'>
                <h3 className='text-primary font-weight-bold mr-auto'>Movies</h3>
                <form onSubmit={handleSearch} className="form-inline my-2 my-lg-0 ml-auto">
                    <input className="form-control mr-sm-2" type="search" onChange={onChange} placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit"><i className='fa-solid fa-magnifying-glass'></i></button>
                </form>
            </div>
            <div className="movies_list">
                {
                    movies.map((movie) => {
                        return <ResultCard key={movie.id} movie={movie} />
                    })
                }
            </div>
        </>
    )
}

export default Movies