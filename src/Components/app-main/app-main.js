import React from 'react';
import Card from './../card/card';
import Search from './../search/search';

class AppMain extends React.Component {
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