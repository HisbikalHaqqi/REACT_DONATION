import React, { Component, Fragment } from 'react'
import Footer from '../../templates/Footer';
import Header from '../../templates/Header';
import SectionBanner from '../../templates/SectionBanner';
import SectionCardDonasi from '../../templates/SectionCardDonasi';
import SectionCardFeedback from '../../templates/SectionCardFeedback';
import SectionCardPost from '../../templates/SectionCardPost';

class Home extends Component{
    
    render(){
        return(
            <Fragment>
                <Header {...this.props}/>
                <SectionBanner/>
                <SectionCardDonasi/>
                <SectionCardPost/>
                <SectionCardFeedback/>
                <Footer/>
            </Fragment>
        )
    }
}

export default Home;