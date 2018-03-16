import React from 'react';

class Card extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {release_date, original_title, vote_average, runtime, tagline, overview, revenue, poster_path} = this.props.data;

        return (
            <div className="container">
                <div className="row">
                    <div className="poster-container col-12 col-md-4 col-lg-4">
                        <img
                            className="poster img-responsive"
                            src={"https://image.tmdb.org/t/p/w500/" + poster_path}
                        />
                    </div>
                    <div className="data-container col-12 col-md-8 col-lg-8">
                        <h1>{original_title}</h1>
                        <span className="title_element">{overview}</span>
                        <p>{tagline}</p>
                        <div className="additional-info">
                            <div className="row">
                                <div className="col-md-6">Original release:
                                    <span className="info_element">{release_date}</span>
                                </div>

                                <div className="col-md-6">Running Time:
                                    <span className="info_element">{runtime} mins</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">Box Office:
                                    <span className="info_element">${revenue}</span>
                                </div>
                                <div className="col-md-6">Vote Average:
                                    <span className="info_element">{vote_average} / 10</span>
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