import React, { Component } from 'react';
import CardDonasiTerakhir from '../../components/atoms/CardDonasiTerakhir';
import CardPost from '../../components/atoms/CardPost';

class SectionCardPost extends Component{
    render(){
        return(
            <div className="section-card-post">
                <div className="col col-md-2">
                    <CardPost/>
                    <CardDonasiTerakhir/>
                </div>
            </div>
        )
    }
}

export default SectionCardPost;