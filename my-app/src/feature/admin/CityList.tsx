import React, {useEffect, useState, memo} from 'react';
import Layout from "../../container/Layout";
import MyButton from "../../components/Elements/Buttons/MyButton";
import TableList from "../../components/Table/TableList";
import MyLabel from "../../components/Elements/Label/MyLabel";
import {useStore} from "../../hooks";
import styles from "../styles/CityList.module.scss"
import BreadCrumbs from "../../components/Elements/Breadcrumbs/BreadCrumbs";
import {useNavigate} from "react-router-dom";
import {initCrumbs, initNavigate} from "../../config";
import * as cityService from "../../service/cityService";
import {cacheItem} from "../../store/actions";

const CityList = () => {
    const [crumbs, setCrumbs] = useState(initCrumbs);
    const navigate = useNavigate();
    const [state, dispatch] = useStore();
    const {data} = state;
    const fetchApi = async () => {
        const dataList = await cityService.getListCity();
        dispatch(cacheItem(dataList))
    }
    useEffect(() => {
        fetchApi();
    }, []);

    const columnCity = [
        {key: 'id', label: '#'},
        {key: 'name', label: 'Name'},
        {key: 'province', label: 'Province'},
        {key: 'country', label: 'Country'},
        {key: 'action', label: 'Action'}
    ]
    return (
        <div className={styles.cityList}>
            <Layout>
                <BreadCrumbs crumbs={crumbs} />
                <MyLabel nameLabel={'Cities'} />
                <MyButton onClick={() => navigate(initNavigate.create)} styleModify={styles.buttonModify}>
                    <span>Create City</span>
                </MyButton>
                <TableList dataTable={data} fetchApi={fetchApi} columnCity={columnCity}/>
            </Layout>
        </div>
    );
};

export default CityList;