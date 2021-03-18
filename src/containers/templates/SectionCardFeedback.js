import React, { Component, Fragment } from 'react';
import CardFeedback from '../../components/atoms/CardFeedback';
class SectionCardFeedback extends Component{
    render(){
        return(
            <div className="section-card-feedback">
                <Fragment>
                <center><h2>Feedback</h2></center>
                    <div className="card-wrapper-feedback col col-md-4">
                        <CardFeedback/>
                        <CardFeedback/>
                        <CardFeedback/>
                        <CardFeedback/>
                    </div>
                </Fragment>
            </div>
        )
    }
}

export default SectionCardFeedback;
