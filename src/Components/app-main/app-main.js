import React from 'react';
import Card from './../card/card';
import Search from './../search/search';

class AppMain extends React.Component {
    render() {
        return (
            <div className="overlay">
                <div className="container search-container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-6 col-lg-5">
                            <a href="#" title="Movie Finder"><img
                                src="https://www.themoviedb.org/assets/static_cache/27b65cb40d26f78354a4ac5abf87b2be/images/v4/logos/powered-by-rectangle-green.svg"
                                className="logo"
                                alt="Movies"/></a>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-lg-7">
                            <form className="searchbar">
                                <input
                                    type="text"
                                    className="form-control searchbox__input"
                                    placeholder="Search movie..."/>
                            </form>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="poster-container col-xs-12 col-md-4 col-lg-4">
                                <img
                                    className="poster"
                                    src="https://image.tmdb.org/t/p/w500/nBNZadXqJSdt05SHLqgT0HuC5Gm.jpg"/>

                            </div>
                            <div className="data-container col-xs-12 col-md-8 col-lg-8">
                                <h1>Tile</h1>
                                <span className="title_element">The movie about...</span>
                                <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
                                    ipsum Lorem ipsum</p>
                                <div className="additional-info">
                                <div className="row">
                                    <div className="col-md-6">Original release:
                                        <span className="info_element">2014-11-05</span>
                                    </div>

                                    <div className="col-md-6">Running Time:
                                        <span className="info_element">169 mins</span>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">Box Office:
                                        <span className="info_element">$500,000,000</span>
                                    </div>
                                    <div className="col-md-6">Vote Average:
                                        <span className="info_element">8.6 / 10</span>
                                    </div>
                                </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default AppMain;