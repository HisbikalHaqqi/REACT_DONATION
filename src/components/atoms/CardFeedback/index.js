import React, { Component } from 'react';
import ImageFeedback from '../../../assets/img/images/img-donate-original.jpg';

class CardFeedback extends Component{
    render(){
        return(
            <div className="card-feedback">
                <img src={ImageFeedback} alt="img-feedback"/>
                <p>“Terima Kasih MII, Semoga perusahaannya
                     maju terus dan berkembang"</p>
            </div>
        )
    }
}

export default CardFeedback;