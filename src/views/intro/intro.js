import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import './intro.styles.scss';

const Intro = (props) => {

    const history = createBrowserHistory();
     
    window.addEventListener('load', () => {
        let eles = document.getElementById(props.video);
        let lan = document.getElementById(props.language);
        console.log(eles);
        console.log(lan);
             
        eles.onended = () => {
            props.setVideo('video-end');
            props.setLanguage('lan-on');
        }
    })

    const handleLanguage = () => {
        return <Redirect to = '/home'/>
    }

    return (
        <>
             <video id={props.video} autoPlay muted playsInline>
                <source src='https://res.cloudinary.com/vanume/video/upload/v1576560868/VANUME_INTROVIDEOS_2019_texkkw.mp4' type='video/mp4' />
             </video>
            <div id={props.language}>
                <a href='/home'>English</a>
                <a href='/inicio'>Español</a>
            </div>
        </>
    )
}
export default Intro; 