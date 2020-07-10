import React from 'react';

const UnavailableComp: React.SFC<{}> = () => {

    const theme = localStorage.getItem('theme');

    return (
        <div id='unavailable-container'>
            <h2 id={ theme === 'dark' ? 'unavailable-message-dark' : 'unavailable-message-light' }>
                Sorry, we couldn't find the page you are looking for.
            </h2>
        </div>
    );
};

export default UnavailableComp;