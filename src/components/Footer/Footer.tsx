import React from 'react';

const Footer: React.SFC<{}> = () => {

    const theme = localStorage.getItem('theme');
    
    const styles = {
        light: 'light-footer',
        dark: 'dark-footer',
        lightP: 'light-footer-p',
        darkP: 'dark-footer-p',
    };

    return (
        <footer id={ theme === 'dark' ? styles.dark : styles.light }>
            <p id={ theme === 'dark' ? styles.darkP : styles.lightP }>© ProClips, 2020</p>
        </footer>
    );
};

export default Footer;