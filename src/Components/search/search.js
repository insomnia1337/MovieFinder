import React from 'react';


const TMDBLogo = 'https://www.themoviedb.org/assets/static_cache/27b65cb40d26f78354a4ac5abf87b2be/images/v4/logos/powered-by-rectangle-green.svg';

class Search extends React.Component {
    render() {
        return (
            <div className="container search-container">
                <div className="row">
                    <div className="col-12 col-sm-6 col-lg-5">
                        <a href="#" title="Movie Finder"><img
                            src={TMDBLogo}
                            className="logo"
                            alt="Movies"/></a>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-7">
                        <form className="searchbar">
                            <input
                                type="text"
                                className="form-control searchbox__input"
                                placeholder="Search movie..."/>
                        </form>
                    </div>
                </div>
            </div>
        )

    }
}

export default Search