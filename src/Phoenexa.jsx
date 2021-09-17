import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import './App.css'


class PhonexaCode extends React.Component {

    componentDidMount() {

        const script = document.createElement("script");

        script.src = "https://cdn101.qhportal.com/pw/render.php?p=E5D89F961D8C4157AF4C301E0B43A877&e=1";

        document.body.appendChild(script);

    }

    render(){
        return(
            <div className="widget-E5D89F961D8C4157AF4C301E0B43A877 callButton">18887013043</div>
        );
    }
}

export default PhonexaCode;
