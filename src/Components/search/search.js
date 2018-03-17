import React from 'react';


const TMDBLogo = 'https://nowymarketing.pl/i/articles/12388_l2.jpg';

class Search extends React.Component {

    constructor(props){
        super(props);
    }

    searchToolbar() {
        let i = 0;
        let movies = this.props.foundMovieList.map((item) => {
            i++;
            return <button id={item} onClick={this.props.clickCallback.bind(null, item)} key={i + item} className="dropdown-item" type="button">{item}</button>;
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
                        {this.props.foundMovieList.length > 1 ? this.searchToolbar() : null }
                    </div>
                </div>
            </div>
        )
    }
}

export default Search