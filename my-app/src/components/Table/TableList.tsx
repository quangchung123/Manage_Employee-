import React, {useMemo, useState} from 'react';
import "bootstrap-icons/font/bootstrap-icons.css";
import styles from './TableList.module.scss'
import {useStore} from "../../hooks";
import {useNavigate} from "react-router-dom";
import Pagination from "../Pagination/Pagination";
import {handleDataOnPage} from "../../utils/help";
import deleteIcon from '../../assets/icon/table/delete.svg';
import editIcon from '../../assets/icon/table/create_24px.svg'
import detailIcon from '../../assets/icon/table/visibility_24px.svg';
import {CURRENT_PAGE, RECORD_INIT, STATUS_API} from "../../constant";
import {initNavigate} from "../../config";
import * as cityService from "../../service/cityService";

const TableList = ({dataTable, fetchApi} : any) => {
    const [state, dispatch] = useStore();
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(CURRENT_PAGE);
    const recordsPerPage = RECORD_INIT;
    const totalPage = Math.ceil(dataTable.length / recordsPerPage);
    const dataList = useMemo(() => (handleDataOnPage(currentPage, dataTable, recordsPerPage)),[currentPage, dataTable]);
    const pageNumbers = Array.from({length: totalPage}, (_, index) => index + 1);
    const handleRowClick = (rowIndex: any, rowData: any, value: string) => {
        value === 'detail' ?  navigate(`${initNavigate.detail}/${rowIndex}`) : navigate(initNavigate.edit)
    }
    const handleEditCity = (index: number) => {
        navigate(`${initNavigate.edit}/${index}`)
    }
    const handleDeleteCity = async (index: number) => {
        const result = await cityService.deleteCity(index);
        if(result === STATUS_API.SUCCESS[1]) {
            fetchApi();
        }
    }
    return (
        <div className={styles.cityTable}>
            <p>Showing 1-{recordsPerPage} of {dataTable.length} items.</p>
            <table >
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Province</th>
                        <th>Country</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {dataList?.map((value: any, index: number) => (
                        <tr key={index}>
                            <td>{value.id}</td>
                            <td>{value.name}</td>
                            <td>{value.province}</td>
                            <td>{value.country}</td>
                            <td className={styles.btnGroup}>
                                <button className={styles.btnAction} onClick={() => handleRowClick(value._id, value, 'detail')}>
                                    <img src={detailIcon} alt={"detailIcon"}/>
                                </button>
                                <button className={styles.btnAction} onClick={() => handleEditCity(value._id)}>
                                    <img src={editIcon} alt={"editIcon"}/>
                                </button>
                                <button className={styles.btnAction} onClick={() => handleDeleteCity(value._id)}>
                                    <img src={deleteIcon} alt={"DeleteIcon"}/>
                                </button>
                            </td>
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