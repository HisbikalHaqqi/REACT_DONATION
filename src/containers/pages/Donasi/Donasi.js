import React, { Component } from 'react';
import CardDonasi from '../../../components/atoms/CardDonasi';
import Footer from '../../templates/Footer';
import Header from '../../templates/Header';

class Donasi extends Component{
    render(){
        return(
            <div>
                <Header {...this.props}/>
                <div className="section-donasi">
                    <center><h2>Donasi</h2></center>
                    <div className="section-donasi-wrapper col col-md-4">
                        <CardDonasi/>
                        <CardDonasi/>
                        <CardDonasi/>
                        <CardDonasi/>
                        <CardDonasi/>
                        <CardDonasi/>
                        <CardDonasi/>
                        <CardDonasi/>
                    </div>
                    <p>Selengkapnya</p>
                </div>
                <Footer/>
            </div>
        )
    }
}
export default Donasi;