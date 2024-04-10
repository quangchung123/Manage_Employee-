import React, {useMemo, useState} from 'react';
import "bootstrap-icons/font/bootstrap-icons.css";
import styles from './TableList.module.scss'
import {useStore} from "../../hooks";
import {deleteItem, sendItem} from "../../store/Actions/actions";
import {useNavigate} from "react-router-dom";
import Pagination from "../Pagination/Pagination";
import {handleDataOnPage} from "../../utils/help";

const TableList = ({dataTable} : any) => {
    const [state, dispatch] = useStore();
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 8;
    const totalPage = Math.ceil(dataTable.length / recordsPerPage);
    const dataList = handleDataOnPage(currentPage, dataTable, recordsPerPage);
    const pageNumbers = Array.from({length: totalPage}, (_, index) => index + 1);
    const handleRowClick =  async (rowIndex: any, rowData: any, value: string) => {
        const payload = {
            ...rowData,
            id: rowIndex,
        }
       await dispatch(sendItem(payload));
        value === 'detail' ?  navigate('/detail') : navigate('/edit')
    }
    const handleDeleteCity = (index: number) => {
        dispatch(deleteItem(index));
    }
    return (
        <div className={styles.cityTable}>
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
                            <th>{index}</th>
                            <th>{value.name}</th>
                            <th>{value.province}</th>
                            <th>{value.country}</th>
                            <th>
                                <button className={styles.buttonAction} onClick={() => handleRowClick(index, value, 'detail')}>
                                    <i className="bi bi-eye"></i>
                                </button>
                                <button className={styles.buttonAction} onClick={() => handleRowClick(index, value, 'edit')}>
                                    <i className="bi bi-pencil"></i>
                                </button>
                                <button className={styles.buttonAction} onClick={() => handleDeleteCity(index)}>
                                    <i className="bi bi-trash-fill"></i>
                                </button>
                            </th>
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