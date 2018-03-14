import React from 'react';

class Card extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="poster-container col-12 col-md-4 col-lg-4">
                        <img
                            className="poster img-responsive"
                            src="https://image.tmdb.org/t/p/w500/nBNZadXqJSdt05SHLqgT0HuC5Gm.jpg"/>

                    </div>
                    <div className="data-container col-12 col-md-8 col-lg-8">
                        <h1>Title</h1>
                        <span className="title_element">The movie about...</span>
                        <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
                            ipsum Lorem ipsum</p>
                        <div className="additional-info">
                            <div className="row">
                                <div className="col-md-6">Original release:
                                    <span className="info_element">2014-11-05</span>
                                </div>

                                <div className="col-md-6">Running Time:
                                    <span className="info_element">169 mins</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">Box Office:
                                    <span className="info_element">$500,000,000</span>
                                </div>
                                <div className="col-md-6">Vote Average:
                                    <span className="info_element">8.6 / 10</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        )

    }
}

export default Card