import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Fifa from './ThirdNavFiles/Fifa.jsx';
import Dota from './ThirdNavFiles/Dota.jsx';
import Csgo from './ThirdNavFiles/Csgo.jsx';
import Lol from './ThirdNavFiles/Lol.jsx';
import Cod from './ThirdNavFiles/Cod.jsx';
import ThirdNav from './ThirdNav.jsx';
import './Leaderboards.css';

const Leaderboards = () => {
    return (
        <div className='leaderboard'>
            <ThirdNav/>
            <Switch>
                <Route exact path='/home' component={Fifa}/>
                <Route exact path='/home/standing/dota' component={Dota}/>
                <Route exact path='/home/standing/csgo' component={Csgo}/>
                <Route exact path='/home/standing/lol' component={Lol}/>
                <Route exact path='/home/standing/cod' component={Cod}/>
            </Switch>
        </div>
    )
}

export default Leaderboards
