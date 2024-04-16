import React from 'react';
import styles from './Breadcrumbs.module.scss';
import {useNavigate} from "react-router-dom";
const BreadCrumbs = ({ crumbs }: any) => {
    const navigate = useNavigate();
    const isLast = (index: number) => {
        return index === crumbs.length - 1;
    };
    return (
        <nav className={styles.Breadcrumbs}>
            <ol>
                {crumbs.map((crumb: {name: string; url: string}, ci: number) => {
                    const disabled = isLast(ci) ? 'disabled' : '';
                    const showSeparator = !isLast(ci);
                    const {name, url} = crumb;
                    return (
                        <li key={ci}>
                            <button
                                className={disabled}
                                onClick={() => navigate(url)}
                                disabled={isLast(ci)}
                            >
                                {name}
                            </button>
                            {showSeparator && <span>/</span>}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
};

export default BreadCrumbs;
