import React from 'react'
import { Link,useLocation } from 'react-router-dom'

const Navbar = () => {

    let location = useLocation();

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-lg-5">
                <Link className="navbar-brand" to="/"><i className="fa-solid fa-video text-danger"></i> eCinema</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse bg-dark" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/movies">Movies</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/watchlist">Watchlist</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/watched">Watched</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar