import React, { Component, Fragment } from 'react';
import IconDollar from '../../../assets/img/icon/dollar.png';
import IconUser from '../../../assets/img/icon/user-1.png';

class InputText extends Component{
    render(){
        return(
            <Fragment>
                
                <div className="form-group col col-md-2">
                    <div className="form-control">
                         <h3>Nominal</h3>
                        <div className="form-wrapper">
                            <img src={IconDollar} alt="icon-dollar"/>
                            <input type="text" id="nominal" className="form-inline"/>
                        </div>
                    </div>
                    <div className="form-control">
                        <h3>Atas Nama</h3>
                        <div className="form-wrapper">
                            <img src={IconUser} alt="icon-dollar"/>
                            <input type="text" id="nominal" className="form-inline"/>
                        </div>
                    </div>
                </div>
            </Fragment>
            
        )
    }
}

export default InputText;