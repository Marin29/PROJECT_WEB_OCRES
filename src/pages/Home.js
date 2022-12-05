import React from 'react';
import Big3 from '../components/Big3';
import Calendrier from '../components/Calendrier';
import Classement from '../components/Classement';
import ClassementWTA from '../components/ClassementWTA';
import Logo from '../components/Logo';
import Match from '../components/Match';
import Navigation from '../components/Navigation';
import Presse from '../components/Presse';

const Home = () => {


    return (
        <div>
            <Logo />
            <Navigation />
            <Match />
            <Classement />
            <ClassementWTA />
            {/* <Calendrier /> */}
            <Big3 />
            <Presse />
        </div>
    );
};

export default Home;