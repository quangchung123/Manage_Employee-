import React from 'react';
import styles from './Pagination.module.scss'

const Pagination = ({setCurrentPage, pageNumbers,currentPage, totalPage}: any) => {
    console.log(currentPage)
    const goToPage = (page: number) => {
        setCurrentPage(page);
    };
    return (
            <div className={styles.elementPagination}>
                <button className={styles.buttonPagination} onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>
                    First
                </button>
                <button className={styles.buttonPagination} onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>
                    <i className="bi bi-chevron-double-left"></i>
                </button>
                {pageNumbers.map((number: number) => (
                    <button className={`${currentPage === number? styles.selectedPage: styles.buttonPagination}`} key={number} onClick={() => goToPage(number)}>
                        {number}
                    </button>
                ))}
                <button className={styles.buttonPagination} onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPage}>
                    <i className="bi bi-chevron-double-right"></i>
                </button>
                <button className={styles.buttonPagination} onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPage}>
                    Last
                </button>
            </div>
    );
};

export default Pagination;