import React from 'react';
import Card from './../card/card';
import Search from './../search/search';

class AppMain extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            movieID: 157336,
        }
    }


    render() {
        return (
            <div className="overlay">
                <Search/>
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

    fetchMovieID(movieID) {
        let url = `https://api.themoviedb.org/3/movie/${movieID}?api_key=be379f00ab45c1359be1344dedeeabf8`
        this.fetchApi(url)
    }
}

export default AppMain;