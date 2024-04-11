import React, {useState} from 'react';
import Layout from "../../container/Layout";
import MyLabel from "../../components/Elements/Label/MyLabel";
import TableDetail from "../../components/Table/TableDetail";
import {useStore} from "../../hooks";
import MyButton from "../../components/Elements/Buttons/MyButton";
import {deleteItem, editItem} from "../../store/Actions/actions";
import {useNavigate} from "react-router-dom";
import Breadcrumbs from "../../components/Elements/Breadcrumbs/Breadcrumbs";
import styles from '../Styles/CityDetail.module.scss';

const CityDetail = () => {
    const [state, dispatch] = useStore();
    const {data, dataDetail} = state;
    const {name} = dataDetail[0];
    const [crumbs, setCrumbs] = useState(['Home', 'Cities', name])
    const navigate = useNavigate();
    const onCrumbClick = () => {
        navigate('/');
    }
    const handleAction = async (value: string) => {
        if (value === 'delete') {
            await dispatch(deleteItem(dataDetail[0]?.id));
            navigate('/');
        } else {
            await dispatch(editItem(dataDetail[0]));
            navigate('/edit');
        }
    }
        return (
        <div>
            <Layout>
                <Breadcrumbs crumbs={crumbs} onCrumbClick={onCrumbClick}/>
                <MyLabel nameLabel={name}/>
                <div className={styles.groupButton}>
                    <MyButton styleModify={styles.btnEdit} onClick={() => handleAction('edit')}>
                        <span>Update</span>
                    </MyButton>
                    <MyButton styleModify={styles.btnDelete} onClick={() => handleAction('delete')}>
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