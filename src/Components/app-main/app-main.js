import React from 'react';
import Card from './../card/card';
import Search from './../search/search';

class AppMain extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            initialMovie: 157336,
            film: '',
            movieList: null,
            foundFilm: null,
            firstThreeFilm: null
        }
    }

    componentDidMount() {
        let url = `https://api.themoviedb.org/3/movie/${this.state.initialMovie}?api_key=be379f00ab45c1359be1344dedeeabf8`;
        this.fetchApi(url);
    }

    fetchApi(url) {
        fetch(url)
            .then(res => res.json())
            .then((data) => {
                this.setState({
                    film: data
                });
            })
            .catch(error => console.log('parsing failed', error))
    }

    userTypedLetter = (e) => {
        let url = 'https://api.themoviedb.org/3/search/movie?api_key=be379f00ab45c1359be1344dedeeabf8&include_adult=false&page=1&language=en-US&query=' + e.target.value;
        fetch(url)
            .then(res => res.json())
            .then((data) => {
                this.setState({
                    foundFilm: data.results[0],
                    movieList: data.results[0].original_title
                });
            })
            .catch(error => console.log('parsing failed', error))
    };

    clickFilm = (e) => {
        this.setState({
            film: this.state.foundFilm,
        })
    };

    render() {
        return (
            <div className="overlay">
                <Search onChangeCallback={this.userTypedLetter} clickCallback={this.clickFilm}
                        foundMovieList={this.state.movieList}/>
                <Card data={this.state.film}/>
                <footer>Made with <span className="heart"></span> &copy; 2018</footer>
            </div>
        )
    }
}

export default AppMain;