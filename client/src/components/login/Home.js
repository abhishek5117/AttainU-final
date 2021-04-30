import React, { Component } from "react";
import '../../App.css';
import Data from './cities.json';

class Home extends Component{
    render(){
        return(
            <div>
                <center>
                <h1>List of the cities</h1>
                {Data.map((citiesDetail, index) => {
                    return <h5>{ citiesDetail.name }</h5>
                })}
                </center>
            </div>
        )
    }
}

export default Home