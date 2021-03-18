import React, { Component } from 'react';
import Footer from '../../templates/Footer';
import Header from '../../templates/Header';
import SectionCardDonasi from '../../templates/SectionCardDonasi';
import SectionCardPost from '../../templates/SectionCardPost';

import ArrowRight from '../../../assets/img/icon/arrow-right.png';
import ArrowLeft from '../../../assets/img/icon/arrow-left.png';

class Activity extends Component{
    render(){
        return(
            <div>
                <Header {...this.props}/>
                <SectionCardPost/>
                <div className="slider">
                    <img className="icon-arrow" src={ArrowLeft} alt="icon-arrow-left"/>
                    <SectionCardDonasi/>
                    <img className="icon-arrow" src={ArrowRight} alt="icon-arrow-right"/>
                </div>
                <Footer/>

            </div>
        )
    }
}
export default Activity;