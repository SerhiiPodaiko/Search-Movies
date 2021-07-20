import React, {Component} from "react";

import MovieItem from "../MovieItem";

export default class MovieList extends Component {

    componentDidMount() {
        this.props.getMovies(this.props.filters);
    };

    componentDidUpdate(prevProps) {
        if (this.props.filters.sort_by !== prevProps.filters.sort_by) {
            this.props.getMovies(this.props.filters);
        }
    };

    render() {
        const { movies } = this.props;
        return (
            <div className="row">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} className='col-md-6 mb-4'>
                            <MovieItem item={movie} />
                        </div>
                    )
                })}
            </div>
        );
    }
}