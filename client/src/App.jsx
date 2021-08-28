import React from 'react';
import Header from './component/header';
import styles from './styles/styles.module.scss';

const app = () => {
    return(
        <div className={ styles.container }>
            <div className={ styles.sidebar } />
            <Header />
        </div>
    );
};

export default app;