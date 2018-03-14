import React from 'react';
import Card from './../card/card';
import Search from './../search/search';

class AppMain extends React.Component {
    render() {
        return (
            <div className="overlay">
                <Search/>
                <Card/>
            </div>

        )
    }
}

export default AppMain;