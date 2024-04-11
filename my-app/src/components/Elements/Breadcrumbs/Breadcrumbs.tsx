import React from 'react';
import styles from './Breadcrumbs.module.scss';

const Breadcrumbs = ({ crumbs, onCrumbClick }: { crumbs: string[], onCrumbClick: (crumb: string) => void }) => {
    console.log(onCrumbClick)
    const isLast = (index: number) => {
        return index === crumbs.length - 1;
    };

    return (
        <nav className={styles.Breadcrumbs}>
            <ol>
                {crumbs.map((crumb: string, ci: number) => {
                    const disabled = isLast(ci) ? 'disabled' : '';
                    const showSeparator = !isLast(ci);
                    return (
                        <li key={ci}>
                            <button
                                className={disabled}
                                onClick={() => onCrumbClick(crumb)}
                                disabled={isLast(ci)}
                            >
                                {crumb}
                            </button>
                            {showSeparator && <span>/</span>}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
};

export default Breadcrumbs;
