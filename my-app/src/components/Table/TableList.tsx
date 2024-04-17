import React, { useMemo, useState } from 'react';
import "bootstrap-icons/font/bootstrap-icons.css";
import styles from './TableList.module.scss'
import Pagination from "../Pagination/Pagination";
import { handleDataOnPage } from "../../utils/help";
import { CURRENT_PAGE, RECORD_INIT, STATUS_API } from "../../constant";
import IconActions from "../MenuActions/IconActions";

const TableList = ({ dataTable, fetchApi, columnCity }: any) => {
    const [currentPage, setCurrentPage] = useState(CURRENT_PAGE);
    const recordsPerPage = RECORD_INIT;
    const totalPage = Math.ceil(dataTable.length / recordsPerPage);
    const dataList = useMemo(() => (handleDataOnPage(currentPage, dataTable, recordsPerPage)), [currentPage, dataTable]);
    const pageNumbers = Array.from({ length: totalPage }, (_, index) => index + 1);

    return (
        <div className={styles.cityTable}>
            <p>Showing 1-{recordsPerPage} of {dataTable.length} items.</p>
            <table>
                <thead>
                <tr>
                    {columnCity.map((column: any) => (
                        <th key={column.key}>{column.label}</th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {dataList?.map((value: any, index: number) => (
                    <tr key={index}>
                        {columnCity.map((column: any) => (
                            <td key={column.key}>
                                {column.key === 'action' ? (
                                    <IconActions fetchApi={fetchApi} value={value}/>
                                ) : value[column.key]}
                            </td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
            <Pagination
                setCurrentPage={setCurrentPage}
                pageNumbers={pageNumbers}
                currentPage={currentPage}
                totalPage={totalPage}
            />
        </div>
    );
};
export default TableList;
