import React from "react";

import NotFound from '../../not-found.png';

const MovieItem = (props) => {
    const {item} = props;

    const viewMovie = () => {
        const url = window.location.href = `https://www.themoviedb.org/movie/${item.id}`;
        window.location.href = url;
    };

    return (

        <div className="card">
            <img className="card-img-top card-img--height"
                 src={`https://image.tmdb.org/t/p/w500${item.backdrop_path || item.poster_path}`}
                 onError={(e) => {e.target.onerror = null; e.target.src = NotFound}}
                 alt=""/>
            <div className="card-body">
                <div className="card-title">{item.title}</div>
                <div className="card-text">Рейтинг: {item.vote_average}</div>
                <button onClick={viewMovie} className="btn btn-primary">View</button>
            </div>
        </div>
    );
}

export default MovieItem;