import React from 'react';
import numeral from "numeral"

class Card extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let {release_date, original_title, vote_average, runtime, tagline, overview, revenue, poster_path, backdrop} = this.props.data;
        let backdropIMG = 'https://image.tmdb.org/t/p/original' + backdrop;
        //when data are not avalaible check
        let noInfo = '-';
        if (vote_average === 'undefined' || vote_average === 0) {
            vote_average = noInfo
        } else {
            vote_average = vote_average + ' / 10'
        };

        if (runtime == null || runtime === 0) {
            runtime = noInfo
        } else {
            runtime = runtime + ' mins'
        };

        if (revenue == null || revenue === 0) {
            revenue = noInfo
        } else {
            revenue = numeral(revenue).format('($0,0)');
        };

        let posterPhoto = "https://image.tmdb.org/t/p/w500/" + poster_path 
        if (poster_path == null) {
            posterPhoto = 'https://www.mearto.com/assets/no-image-83a2b680abc7af87cfff7777d0756fadb9f9aecd5ebda5d34f8139668e0fc842.png';
        };

        
        return (
            <div className="container">
                <div className="row">
                    <div className="poster-container col-12 col-md-4 col-lg-4">
                        <img
                            className="poster img-responsive"
                            src={posterPhoto}
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
                                    <span className="info_element">{runtime}</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">Box Office:
                                    <span className="info_element">{revenue}</span>
                                </div>
                                <div className="col-md-6">Vote Average:
                                    <span className="info_element">{vote_average}</span>
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