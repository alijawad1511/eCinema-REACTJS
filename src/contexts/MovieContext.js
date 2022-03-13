import React,{ useState,createContext } from 'react'

export const MovieContext = createContext();

export const MovieProvider = (props) => {

    const [movies,setMovies] = useState([]);
    const [watched,setWatched] = useState([]);
    const [watchList,setWatchList] = useState([]);

    const searchMovies = async (query) => {

        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=cf3b28bb6fe88384dd6067bfc958876f&language=en-US&page=1&include_adult=false&query=${query}`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const json = await response.json();
        setMovies(json.results);
        console.log(movies);
    }

    const addMovieToWatchList = (movie) => {
        setWatchList([...watchList,movie]);
        alert('Movie added to watch list');
    }

    const addMovieToWatched = (movie) => {
        setWatched([...watched,movie]);
        alert('Movie added to watched list')
    }


    return (
        <MovieContext.Provider value={{ movies,setMovies,searchMovies,watched,watchList,setWatched,setWatchList,addMovieToWatched,addMovieToWatchList }}>
            {props.children}
        </MovieContext.Provider>
    )

}