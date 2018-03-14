import React from 'react';

class AppMain extends React.Component {
    render() {
        return (
            <div className="overlay">
            <div className="container search-container">
                <div className="row">
                    <div className="col-xs-12 col-sm-6 col-lg-5">
                        <a href="#" title="Movie Finder"><img src="https://www.themoviedb.org/assets/static_cache/27b65cb40d26f78354a4ac5abf87b2be/images/v4/logos/powered-by-rectangle-green.svg" className="logo" alt="Movies"/></a>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-lg-7">
                        <form className="searchbar">
                            <input type="text" className="form-control searchbox__input" placeholder="Search movie..."/>
                        </form>
                    </div>
                </div>
                <div className="container">
                <div className="row">
                    <div className="poster-container col-xs-12 col-md-4 col-lg-4">
                    <img className="poster" src="https://image.tmdb.org/t/p/w500/nBNZadXqJSdt05SHLqgT0HuC5Gm.jpg"/>
                    
                    </div>
                    <div className="data-container col-xs-12 col-md-8 col-lg-8">
                    <h1>Title</h1>
                    <span>bla bla bla</span>
                    </div>
                
               
                </div>
                
                </div>
            </div>
            </div>
        )
    }
}

export default AppMain;