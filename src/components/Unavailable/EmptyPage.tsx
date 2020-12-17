import React from 'react';

const UnavailableComp: React.SFC<{}> = () => {

    const theme = localStorage.getItem('theme');

    return (
        <div id='unavailable-container'>
            <h3 id={ theme === 'dark' ? 'unavailable-message-dark' : 'unavailable-message-light' }>
                Sorry, we couldn't find any clips for the game you are looking for.
            </h3>
            <h3 id={ theme === 'dark' ? 'unavailable-message-dark' : 'unavailable-message-light' }>
                The game you are looking for may not currently be supported on this platform, or you may have made a typo in your search.
            </h3>
            {/* <h3 id={ theme === 'dark' ? 'unavailable-message-dark' : 'unavailable-message-light' }>
                or you may have made a typo in your search.
            </h3> */}
            <h3 id={ theme === 'dark' ? 'unavailable-message-dark' : 'unavailable-message-light' }>
                If you're positive neither of these issues may be the case, please feel free to be the first to upload clips so that others may bask in your glory!
            </h3>
        </div>
    );
};

export default UnavailableComp;