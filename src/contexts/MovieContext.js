import React,{ useState,createContext } from 'react'
import axios from 'axios';

export const MovieContext = createContext();

export const MovieProvider = (props) => {

    const [movies,setMovies] = useState([]);
    const [watched,setWatched] = useState([]);
    const [watchList,setWatchList] = useState([]);
    const [upcommingMovies,setUpcommingMovies] = useState([]);
    const [latestMovies,setLatestMovies] = useState([]);
    const [topRatedMovies,setTopRatedMovies] = useState([]);

    const URL = `https://themoviedb.org/3`;

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

    const fetchLatestMovies = async () => {
        const LATEST_MOVIES = `/movie/latest`;
        const { data: { results } } = await axios(`${URL}${LATEST_MOVIES}?api_key=cf3b28bb6fe88384dd6067bfc958876f`);
        setLatestMovies(results);
    }

    const fetchTopRatedMovies = async () => {
        const TOP_RATED_MOVIES = `/movie/top_rated`;
        const { data: { results } } = await axios(`${URL}${TOP_RATED_MOVIES}?api_key=cf3b28bb6fe88384dd6067bfc958876f`);
        setTopRatedMovies(results);
    }

    const fetchUpcommingMovies = async () => {
        const UPCOMMING_MOVIE_URL = `/movie/upcoming`;
        const { data: { results } } = await axios(`https://api.themoviedb.org/3/movie/upcoming?api_key=cf3b28bb6fe88384dd6067bfc958876f&language=en-US&page=1`);
        setUpcommingMovies(results);
        console.log(results);
    }


    return (
        <MovieContext.Provider value={{ latestMovies,fetchLatestMovies,topRatedMovies,fetchTopRatedMovies,upcommingMovies,movies,setMovies,searchMovies,watched,watchList,setWatched,setWatchList,addMovieToWatched,addMovieToWatchList,fetchUpcommingMovies }}>
            {props.children}
        </MovieContext.Provider>
    )

}