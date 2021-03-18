import React, { Component } from 'react';
import ImageBanner from '../../assets/img/images/banner.jpg';
import Button from '../../components/atoms/Button';

class SectionBanner extends Component{

    render(){
        return(
            <div className="section-banner">
                <div className="image-wrapper">
                    <img alt="img-banner" src={ImageBanner}></img>
                </div>
                <div className="banner-wrapper">
                    <h2>SUCIKAN HARTAMU DENGAN BERDONASI</h2>
                    <h5>Bantu warga sekitar menjadikan dirimu menjadi pribadi yang lebih baik, donasi sakarang</h5>
                    <center>
                            <Button 
                                className="btn btn-primary"
                                isEksternal
                                type="link"
                                href={`/donasi`}>
                                    Donasi
                            </Button>
                    </center>
                </div>
            </div>
        )
    }
}

export default SectionBanner;