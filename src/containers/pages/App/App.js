import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Activity from '../Activity/Aktivity';
import Donasi from '../Donasi/Donasi';
import DonasiDetail from '../DonasiDetail/DonasiDetail';
import Home from '../Home/Home';


function App(){
    return(
        <Router>
            <div>
                <Route path="/" exact component={Home}/>
                <Route path="/donasi" exact component={Donasi}/>
                <Route path="/donasi/3nsfdknenr4r24324"  component={DonasiDetail}/>
                <Route path="/activity" component={Activity}/>
            </div>
        </Router>
    )
}

export default App;
