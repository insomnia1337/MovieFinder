import React from 'react';


const TMDBLogo = 'https://www.themoviedb.org/static_cache/v4/logos/408x161-powered-by-rectangle-green-bb4301c10ddc749b4e79463811a68afebeae66ef43d17bcfd8ff0e60ded7ce99.png';

class Search extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            open: true
        }
    }
    toggleDropdown(){
        this.setState({
            open: false
        })
    }


    searchToolbar() {
        let i = 0;
        let movies = this.props.foundMovieList.map((item) => {
            i++;
            return <button id={item} onBlur={() => this.toggleDropdown()} onFocus={() => this.toggleDropdown()} onClick={this.props.clickCallback.bind(null, item)} key={i + item} className="dropdown-item" type="button">{item}</button>;
        });

        return (
            
            <div className="dropdown">
              {movies}
            </div>
        )
    }

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
                                onChange={this.props.onChangeCallback}
                                type="text"
                                className="form-control searchbox__input"
                                placeholder="Search movie..."/>
                        </form>
                        {this.props.foundMovieList.length > 1 && this.state.open ? this.searchToolbar() : null }
                    </div>
                </div>
            </div>
        )
    }
}

export default Search