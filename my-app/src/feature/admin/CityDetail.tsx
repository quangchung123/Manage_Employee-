import React, {useEffect, useState} from 'react';
import Layout from "../../container/Layout";
import MyLabel from "../../components/Elements/Label/MyLabel";
import TableDetail from "../../components/Table/TableDetail";
import {useStore} from "../../hooks";
import MyButton from "../../components/Elements/Buttons/MyButton";
import {useNavigate, useParams} from "react-router-dom";
import BreadCrumbs from "../../components/Elements/Breadcrumbs/BreadCrumbs";
import styles from '../styles/CityDetail.module.scss';
import {initCrumbs, initNavigate} from "../../config";
import {DELETE_ITEM, EDIT_ITEM} from "../../constant/actions";
import * as cityService from "../../service/cityService";
import {STATUS_API} from "../../constant";

const CityDetail = () => {
    const [state, dispatch] = useStore();
    const [dataDetail, setDataDetail] = useState({});
    const param = useParams();
    const idItem = param.id;
    const [crumbs, setCrumbs] = useState(initCrumbs);
    const navigate = useNavigate();
    useEffect(() => {
        const fetchData = async () => {
            const result = await cityService.detailCity(idItem);
            setDataDetail(result);
        }
        fetchData();
    },[idItem])

    const handleAction = async (value: string) => {
        if (value === DELETE_ITEM) {
            const result = await cityService.deleteCity(idItem);
            if(result === STATUS_API.SUCCESS[1]) {
                navigate(initNavigate.home);
            }
        } else {
            navigate(`${initNavigate.edit}/${idItem}`);
        }
    }
        return (
        <div>
            <Layout>
                <BreadCrumbs crumbs={crumbs} />
                {/*<MyLabel nameLabel={name}/>*/}
                <div className={styles.groupButton}>
                    <MyButton styleModify={styles.btnEdit} onClick={() => handleAction(EDIT_ITEM)}>
                        <span>Update</span>
                    </MyButton>
                    <MyButton styleModify={styles.btnDelete} onClick={() => handleAction(DELETE_ITEM)}>
                        <span>Delete</span>
                    </MyButton>
                </div>
                <MyLabel />
                <TableDetail dataDetail={dataDetail}/>
            </Layout>
        </div>
    );
};

export default CityDetail;