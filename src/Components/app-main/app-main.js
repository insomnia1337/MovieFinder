import React from 'react';
import Card from './../card/card';
import Search from './../search/search';

class AppMain extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            idMovie: 343668,
            film: '',
            movieList: '',
        }
    }

    componentDidMount() {
        this.displayFilmDetails(this.state.idMovie);
    }

    displayFilmDetails(idMovie) {
        let url = `https://api.themoviedb.org/3/movie/${idMovie}?api_key=be379f00ab45c1359be1344dedeeabf8`;
        fetch(url)
            .then(res => res.json())
            .then((data) => {
                this.setState({
                    film: data
                });
                    let backdrop_path = "url(https://image.tmdb.org/t/p/original/" + data.backdrop_path + ")";
                    document.getElementsByTagName('body')[0].style.backgroundImage = backdrop_path;
            })
            .catch(error => console.log('parsing failed', error))
    }

    userTypedLetter = (e) => {
        if (e.target.value === '') {
            this.setState({
                film: '',
                movieList: '',
            });
            this.displayFilmDetails(this.state.idMovie);
            return ;
        }
        let url = 'https://api.themoviedb.org/3/search/movie?api_key=be379f00ab45c1359be1344dedeeabf8&include_adult=false&page=1&language=en-US&query=' + e.target.value;
        fetch(url)
            .then(res => res.json())
            .then((data) => {
                let movieListTitle = [];
                data.results.slice(0,5).map((film) => {
                    movieListTitle.push(film.original_title);
                });
                this.setState({
                    movieList: movieListTitle,
                    movieListDescription:  data.results.slice(0,5)
                });
            })
            .catch(error => console.log('parsing failed', error))
    };

    clickFilm = (title) => {
        this.state.movieListDescription.map((film) => {
           if (film.original_title === title) {
               this.setState({
                   idMovie: film.id,
                   movieList: ''
               });
               this.displayFilmDetails(film.id);
           }
        });
    };

    hideToolbar = () => {
        this.setState({
            movieList: ''
        })
    };

    render() {
        return (
            <div className="overlay">
                <Search onChangeCallback={this.userTypedLetter} clickCallback={this.clickFilm}
                        foundMovieList={this.state.movieList} onMouseLeaveCallback={this.hideToolbar}/>
                <Card data={this.state.film}/>
                <footer>Made with <span className="heart"></span> &copy; 2018</footer>
            </div>
        )
    }
}

export default AppMain;