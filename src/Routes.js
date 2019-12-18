import React, {useState} from 'react';
import { Switch, Route } from 'react-router-dom';

import Intro from './views/intro/intro';
import Home from './views/home/home';
import Inicio from './views/inicio/inicio';


const Routes = () => {
    const [video, setVideo] = useState('video-on');
    const [language, setLanguage] = useState('lan-off');

    console.log(video);
    console.log(language);

    return (
        <>
        <Switch>
            <Route exact path='/' render={
                () =>  (<Intro video={video} setVideo={setVideo} language={language} setLanguage={setLanguage}/>) 
            } />
            <Route exact path='/home' component={Home}/>
            <Route exact path='/inicio' component={Inicio}/>
        </Switch>
        </>
    )
}

export default Routes;