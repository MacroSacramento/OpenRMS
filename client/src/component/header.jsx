import React from 'react';
import styles from '../styles/header.module.scss';

const Header = () => {

    return (
        <header className={ styles.header }>
            <h1 className={ styles.header_logo }>Home</h1>
        </header>
    );
};

export default Header;