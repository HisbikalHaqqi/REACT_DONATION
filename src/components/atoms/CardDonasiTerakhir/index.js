import React, { Component } from 'react';
import IconTime from '../../../assets/img/icon/access_time.png';
import ImageFeedback from '../../../assets/img/images/img-donate-original.jpg'
class CardDonasiTerakhir extends Component{
    render(){
        return(
            <div className="card-donate-recent-wrapper">
                <center><h2>Donasi Terakhir</h2></center>
                <div className="card-donate-recent">
                    <div className="card-recent-wrapper col col-md-2">
                        <div className="img-recent-donate col col-md-2"  >
                            <img src={ImageFeedback} alt="img-donate"/>
                        </div>
                        <div>
                            <h3>Justin Bieber</h3>
                            <p>Semoga lekas sembuh dan dapat kembali beraktivitas seperti semula,Semangat!!
                                <span>
                                    <img src={IconTime} alt="icon-time"/>
                                    05 Menit yang lalu
                                </span>
                            </p>
                            <div className="badge-wrapper">
                                <p>Donasi:Rp. 5.000.000</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card-donate-recent">
                    <div className="card-recent-wrapper col col-md-2">
                        <div className="img-recent-donate col col-md-2"  >
                            <img src={ImageFeedback} alt="img-donate"/>
                        </div>
                        <div>
                            <h3>Justin Bieber</h3>
                            <p>Semoga lekas sembuh dan dapat kembali beraktivitas seperti semula,Semangat!!
                                <span>
                                    <img src={IconTime} alt="icon-time"/>
                                    05 Menit yang lalu
                                </span>
                            </p>
                            <div className="badge-wrapper">
                                <p>Donasi:Rp. 5.000.000</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-donate-recent">
                    <div className="card-recent-wrapper col col-md-2">
                        <div className="img-recent-donate col col-md-2"  >
                            <img src={ImageFeedback} alt="img-donate"/>
                        </div>
                        <div>
                            <h3>Justin Bieber</h3>
                            <p>Semoga lekas sembuh dan dapat kembali beraktivitas seperti semula,Semangat!!
                                <span>
                                    <img src={IconTime} alt="icon-time"/>
                                    05 Menit yang lalu
                                </span>
                            </p>
                            <div className="badge-wrapper">
                                <p>Donasi:Rp. 5.000.000</p>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="load-link">Selengkapnya</p>
            </div>
        )
    }
}

export default CardDonasiTerakhir;