import React, { Component } from 'react';
import Button from '../Button';

class CardSmallPost extends Component{
    render(){
        return(
            <div>
                <div className="card-small-wrapper">
                    <div className="img-wrapper">
                        <img src={}/>
                        <h4>Kanker Otak</h4>
                        <p>Rex merupakan anak seorang pemulung yang menderita kanker otak stadium 4, </p>
                        <Button isEksternal type="link">Selengkapnya</Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default CardSmallPost;