import React, {Component} from 'react';

import MovieList from "../MovieList";
import Filters from "../Filters";
import SearchPanel from "../SearchPanel";

import {API_KEY_3, API_URL} from "../api/api";

class App extends Component {
    state = {
        movies: [],
        filters: {
            sort_by: `vote_average.asc`
        },
        searchTerm: ''
    };

    getMovies = (filters) => {
        const { sort_by } = filters;
        const link = `${API_URL}/discover/movie?api_key=${API_KEY_3}&language-ru-RU&sort_by=${sort_by}`;
        fetch(link)
            .then(response => {
                return response.json();
            })
            .then(data => {
                this.setState({
                    movies: data.results
                })
            });
    };

    onChangeFilters = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState(prevState => {
            return {
                filters: {
                    ...prevState.filters,
                    [name]: value
                }
            }
        })
    };

    searchMovies = (event) => {
        const { searchTerm } = this.state;

        event.preventDefault();
        const link = `${API_URL}/search/movie?api_key=${API_KEY_3}&language=en-US&query=${searchTerm}`;
        fetch(link)
            .then(response => {
               return  response.json();
            })
            .then(data => {
                this.setState({
                    movies: data.results
                })
            })
    };

    handleOnChange = (event) => {
        this.setState({
            searchTerm: event.target.value
        })
    };

    render() {
        const { filters, searchTerm, movies } = this.state;
        return (
            <div className="container">
                <div className="row mt-4">
                    <div className="col-12 mb-3">
                        <SearchPanel
                            searchTerm={searchTerm}
                            searchMovies={this.searchMovies}
                            handleOnChange={this.handleOnChange}  />
                    </div>
                    <div className="col-4">
                        <div className="card" style={{ width: '100% '}}>
                            <div className="card-body">
                                <h3>Фільтри</h3>
                                <Filters filters={filters}
                                         onChangeFilters={this.onChangeFilters} />
                            </div>
                        </div>
                    </div>
                    <div className="col-8">
                        <MovieList
                            filters={filters}
                            getMovies={this.getMovies}
                            movies={movies}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;