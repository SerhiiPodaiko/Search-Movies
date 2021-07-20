import React from "react";

const SearchPanel = (props) => {
    return (
        <form className="input-group" onSubmit={props.searchMovies}>
            <input type="search"
                   className="form-control rounded"
                   placeholder="Search" aria-label="Search"
                   aria-describedby="search-addon"
                   value={props.searchTerm}
                   onChange={props.handleOnChange}/>
            <button type="button" className="btn btn-outline-primary">Search</button>
        </form>
    )
};

export default SearchPanel;