import React, { Component, Fragment } from 'react';
import Header from '../../templates/Header';
import Footer from '../../templates/Footer';
import InputText from '../../../components/atoms/Form/InputText';
import ImageDetail from '../../../assets/img/images/img-01.jpg';
import Button from '../../../components/atoms/Button';
import SectionCardDonasi from '../../templates/SectionCardDonasi';

import IconUsers from '../../../assets/img/icon/users.png';
import LogoBca from '../../../assets/img/logo/bca.png';
import LogoMandiri from '../../../assets/img/logo/mandiri.png';
import ArrowRight from '../../../assets/img/icon/arrow-right.png';
import ArrowLeft from '../../../assets/img/icon/arrow-left.png';


class DonasiDetail extends Component{
    render(){
        return(
            <Fragment>
                <Header {...this.props}/>
                <div className="section-background">
                    <center>
                        <h2>Donasi Detail</h2>
                        <h3>Joni Wakwaw - Penyakit Malas</h3>
                    </center>
                    <div className="img-section col col-md-2">
                        <div className="img-section-1 col col-md-1">
                            <img src={ImageDetail} alt="img-section-1"/>
                        </div>
                        <div className="img-section-2 col col-md-2">
                            <img src={ImageDetail} alt="img-section-2"/>
                            <img src={ImageDetail} alt="img-section-3"/>
                            <img src={ImageDetail} alt="img-section-4"/>
                            <img src={ImageDetail}  alt="img-section-5"/>
                        </div>
                    </div>
                    <div className="section-detail-wrapper">
                        <div className="title">
                            <img src={IconUsers} alt="img-title"/>
                            <h2>Joni Wakwaw 18 Tahun</h2>
                            <h3>Mengidap Penyakit Malas</h3>
                            <p>05 December 2020</p>
                        </div>
                        <div className="description">
                            Lorem Ipsum is not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </div>
                        <div className="donate">
                            <div className="col col-md-2">
                                <InputText/>
                            </div>
                            <Button type="link" isPrimary >Donasikan</Button >
                        </div>
                        
                        <div className="info-bank col col-md-6">
                            <div>
                                <img src={LogoBca}/>
                                <p>Bank Central Asia</p>
                                <p>324243-5454-23455</p>
                                <p>Dinda Hawu</p>
                            </div>
                            <div>
                                <img src={LogoMandiri}/>
                                <p>Bank Central Asia</p>
                                <p>324243-5454-23455</p>
                                <p>Azmaluna Bella</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="slider">
                    <img className="icon-arrow" src={ArrowLeft} alt="icon-arrow-left"/>
                    <SectionCardDonasi/>
                    <img className="icon-arrow" src={ArrowRight} alt="icon-arrow-right"/>
                </div>
                <Footer/>
            </Fragment>
        )
    }
}
export default DonasiDetail;