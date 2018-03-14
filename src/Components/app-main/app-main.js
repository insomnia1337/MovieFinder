import React from 'react';
import Card from './../card/card';
import Search from './../search/search';

class AppMain extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            movieID: 157336
        }
    }
    componentDidMount() {
        fetch("https://api.themoviedb.org/3/movie/${movieID}?api_key=be379f00ab45c1359be1344dedeeabf8")
          .then(res => res.json())
          .then(json => this.setState({ data: json.results }));
      }
      
//tutaj trzeba wyciagnac zmienne ktore beda nam potrzebne
    render() {
        return (
            <div className="overlay">
                <Search/>
                <Card/>
                <footer>Made with <span className="heart"></span> &copy; 2018</footer>
            </div>

        )
    }
}

export default AppMain;