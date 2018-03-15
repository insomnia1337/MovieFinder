import React from 'react';
import Card from './../card/card';
import Search from './../search/search';

class AppMain extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            movieID: 157336,
            queryMovie: null,
            foundTittle: null,
            foundFilm: null
        }
    }

    userSelectedFilm = (e) => {
      this.setState({
          queryMovie: e.target.value
      });
        console.log(this.state.queryMovie);
        this.startSearchMovie(this.state.queryMovie);
    };

    clickFilm = (e) => {
        console.log(this.state.foundFilm);
        this.setState({
            movieID: this.state.foundFilm.id,
            original_title: this.state.foundFilm.original_title,
            tagline: this.state.foundFilm.tagline,
            dataRelease: this.state.foundFilm.release_date,
            vote: this.state.foundFilm.vote_average,
            poster: this.state.foundFilm.poster_path,
            time: this.state.foundFilm.runtime,
            cash: this.state.foundFilm.revenue,
            overview: this.state.foundFilm.overview
        })
    };

    render() {
        return (
            <div className="overlay">
                <Search filmSelected={this.userSelectedFilm} clickCallbackSelectMovie={this.clickFilm}  foundMovieTittle={this.state.foundTittle}/>
                <Card data={this.state}/>
                <footer>Made with <span className="heart"></span> &copy; 2018</footer>
            </div>

        )
    }
    componentDidMount() {
        let url = `https://api.themoviedb.org/3/movie/${this.state.movieID}?api_key=be379f00ab45c1359be1344dedeeabf8`
        this.fetchApi(url);
    }

    fetchApi(url) {
        fetch(url)
        .then(res => res.json())
        .then((data) => {
        this.setState({
            movieID: data.id,
            original_title: data.original_title,
            tagline: data.tagline,
            dataRelease: data.release_date,
            vote: data.vote_average,
            poster: data.poster_path,
            time: data.runtime,
            cash: data.revenue,
            overview: data.overview
        })
    })
        .catch(error => console.log('parsing failed', error))
    }

    startSearchMovie(query) {
        let url = 'https://api.themoviedb.org/3/search/movie?api_key=be379f00ab45c1359be1344dedeeabf8&include_adult=false&page=1&language=en-US&query=' + query;
        fetch(url)
            .then(res => res.json())
            .then((data) => {
                console.log(data);
                this.setState({
                    foundFilm: data.results[0],
                    foundTittle: data.results[0].original_title
                })
                console.log(this.state.foundTittle);
            })
            .catch(error => console.log('parsing failed', error))
    }
}

export default AppMain;