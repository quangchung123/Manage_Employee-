import React from 'react';
import Layout from "../../container/Layout";
import MyButton from "../../components/Elements/Buttons/MyButton";
import TableList from "../../components/Table/TableList";
import MyTab from "../../components/Elements/Tabbar/MyTab";
import MyLabel from "../../components/Elements/Label/MyLabel";
import {useStore} from "../../hooks";
import styles from "../Styles/CityList.module.scss"

const CityList = () => {
    const [state, dispatch] = useStore();
    const {data, dataDetail} = state;
    return (
        <div className={styles.cityList}>
            <Layout>
                <MyTab />
                <MyLabel />
                <MyButton link={"/create"} styleModify={styles.buttonModify}>
                    <span>Create City</span>
                </MyButton>
                <TableList dataTable={data}/>
            </Layout>
        </div>
    );
};

export default CityList;