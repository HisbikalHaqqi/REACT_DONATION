import React, { Component } from 'react'
import CardDonasi from '../../components/atoms/CardDonasi';

class SectionCardDonasi extends Component{
    render(){
        return(
            <div className="section-donasi">
                <center><h3>Donasi</h3></center>
                <div className="col col-md-4">
                     <CardDonasi/>   
                     <CardDonasi/>   
                     <CardDonasi/>   
                     <CardDonasi/>   
                </div>
                <p>Load More</p>
            </div> 
        )
    }
}

export default SectionCardDonasi;