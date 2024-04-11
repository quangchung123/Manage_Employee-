import React from 'react';
import styles from '../Breadcrumbs/Breadcrumbs.module.scss'

const MyTab = () => {
    return (
        <div className={styles.tab}>
            <span>Home</span>

            <span>/</span>
            <span>Cities</span>
        </div>
    );
};

export default MyTab;