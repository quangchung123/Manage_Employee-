import React, {useState} from 'react';
import Layout from "../../container/Layout";
import MyButton from "../../components/Elements/Buttons/MyButton";
import TableList from "../../components/Table/TableList";
import MyTab from "../../components/Elements/Tabbar/MyTab";
import MyLabel from "../../components/Elements/Label/MyLabel";
import {useStore} from "../../hooks";
import styles from "../Styles/CityList.module.scss"
import Breadcrumbs from "../../components/Elements/Breadcrumbs/Breadcrumbs";

const CityList = () => {
    const [crumbs, setCrumbs] = useState(['Home', 'Cities']);
    const [state, dispatch] = useStore();
    const {data, dataDetail} = state;
    const onCrumbClick = () => {
        console.log(crumbs)
    }
    return (
        <div className={styles.cityList}>
            <Layout>
                <Breadcrumbs crumbs={crumbs} onCrumbClick={onCrumbClick}/>
                <MyLabel nameLabel={'Cities'} />
                <MyButton link={"/create"} styleModify={styles.buttonModify}>
                    <span>Create City</span>
                </MyButton>
                <TableList dataTable={data}/>
            </Layout>
        </div>
    );
};

export default CityList;