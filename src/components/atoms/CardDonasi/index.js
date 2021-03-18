import React, { Component } from 'react';
import ImageCard from '../../../assets/img/images/img-01.jpg';
import IconHeart from '../../../assets/img/icon/heart.png';
import IconMail from '../../../assets/img/icon/email.png';
import Button from '../Button';

class CardDonasi extends Component{
    render(){
        return(
            <div className="card-wrapper-donasi">
                <div className="img-thumbnail">
                    <div className="badge">
                        <img src={IconHeart} alt="img-heart"/>
                        <img src={IconMail} alt="img-mail"/>
                    </div>
                    <img src={ImageCard} alt="img-card"/>
                </div>
                <div className="card-title">
                    <div className="card-title-desc">
                        <h5>Total Donasi</h5>
                        <p>Rp. 5.000.000</p>
                    </div>
                    <div className="card-title-desc">
                        <h5>Total Donatur </h5>
                        <p>100 Orang</p>
                    </div>
                </div>
                <div className="card-description">
                    <h5>Kanker Otak</h5>
                    <p>Rex merupakan anak seorang pemulung yang menderita kanker otak stadium 4,<br></br> 
                        <Button isEksternal type="link" href={"/donasi/3nsfdknenr4r24324"}>Selengkapnya</Button>
                    </p>
                </div>
            </div>
        )
    }
}

export default CardDonasi;