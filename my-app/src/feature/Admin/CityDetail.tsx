import React from 'react';
import Layout from "../../container/Layout";
import MyTab from "../../components/Elements/Tabbar/MyTab";
import MyLabel from "../../components/Elements/Label/MyLabel";
import TableDetail from "../../components/Table/TableDetail";
import {useStore} from "../../hooks";
import MyButton from "../../components/Elements/Buttons/MyButton";
import {deleteItem, editItem} from "../../store/Actions/actions";
import {useNavigate} from "react-router-dom";

const CityDetail = () => {
    const [state, dispatch] = useStore();
    const {data, dataDetail} = state;
    const navigate = useNavigate();
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
                <MyTab />
                <div>
                    <MyButton onClick={() => handleAction('edit')}>
                        <span>Update</span>
                    </MyButton>
                    <MyButton onClick={() => handleAction('delete')}>
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