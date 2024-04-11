import React from 'react';
import styles from './Label.module.scss';
const MyLabel = ({nameLabel, nameCity}: any) => {
    console.log(nameCity)
    return (
        <div className={styles.label}>
            <span>{nameLabel}</span>
            <span>{nameCity}</span>
        </div>
    );
};

export default MyLabel;