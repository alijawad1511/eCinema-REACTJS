import React from 'react';
import './index.css';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Movies from './components/Movies';
import Watchlist from './components/Watchlist';
import Watched from './components/Watched';
import { MovieProvider } from './contexts/MovieContext'

const App = () => {
    return (
        <>
            <MovieProvider>
                <Router>
                    <Navbar />
                    <div className="container">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/movies" element={<Movies />} />
                            <Route path="/watchlist" element={<Watchlist />} />
                            <Route path="/watched" element={<Watched />} />
                        </Routes>
                    </div>
                </Router>
            </MovieProvider>
        </>
    );
}

export default App;