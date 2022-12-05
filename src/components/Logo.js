import React from 'react';

const Logo = () => {
    return (
        <div className="logo">
            {/* les images importées depuis la balise IMG sont accessibles dans "public" */}
            <img src="./logo192.png" alt="logo react" />
            <h2>info tennis</h2>
        </div>
    );
};

export default Logo;