import React, { Component } from 'react';
import ImagePost from '../../../assets/img/images/img-post.png';

class CardPost extends Component{
    render(){
        return(
            <div>
                <div className="card-recent-post col col-md-1">
                    <center><h2>Recent Post</h2></center>
                    <div className="card-post-description">
                        <img src={ImagePost} alt="img-post"/>
                        <h5>Berbagi rezeki</h5>
                        <p>01 Maret 20200 07:00 </p>
                        <p className="description">
                            PT Mitra Integrasi Informatika melakukan donasi kepada warga tidak mampu dengan cara membagikan makanan gratis dan pakaian yang merupakan hasil dari donasi para karyawan yang bekerja di PT Mitra Integrasi informatika yang menyisihkan sedikit rejekinya untuk berbagi dengan sesama. Selengkapnya...
                        </p>
                    </div>
                    <p className="load-link">
                        Selengkapnya
                    </p>
                </div>
            </div>
        )
    }
}

export default CardPost;