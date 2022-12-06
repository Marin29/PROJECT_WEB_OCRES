import React from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

const About = () => {
    return (
        <div>
            <Logo />
            <Navigation />
            <h1>A propos</h1>
            <br />
            <p>Marin Tulard et Arthur Vinhas ont le plaisir de mettre à votre disposition ce dashboard de tennis. Il vous permettra de toujours rester informé sur l'évolution de ce sport.</p>

        </div>
    );
};

export default About;