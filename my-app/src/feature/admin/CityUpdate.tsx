import React, {useEffect, useState} from 'react';
import MyLabel from "../../components/Elements/Label/MyLabel";
import Layout from "../../container/Layout";
import {useStore} from "../../hooks";
import {useNavigate, useParams} from "react-router-dom";
import BreadCrumbs from "../../components/Elements/Breadcrumbs/BreadCrumbs";
import FormCity, {initState} from "../../components/Elements/Form/FormCity";
import {initCrumbs, initCrumbUpdate, initNavigate} from "../../config";
import * as cityService from "../../service/cityService";
import {STATUS_API} from "../../constant";
const CityUpdate = () => {
    const [state, dispatch] = useStore();
    const [dataUpdate, setDataUpdate] = useState(initState);
    const param = useParams();
    const {data, dataDetail} = state;
    useEffect(() => {
        setDataUpdate(data.find((item: any) => item._id == param.id));
    }, [param.id, data]);
    const navigate = useNavigate();
    const [crumbs, setCrumbs] = useState(initCrumbUpdate);
    const handleOnSubmit =  async (dataForm: any) => {
        const {_id, ...payload} = dataForm;
        const result = await cityService.updateCity(_id, payload);
        if(result === STATUS_API.SUCCESS[1]) {
            navigate(initNavigate.home)
        }
    }
    return (
        <div>
            <Layout>
                <BreadCrumbs crumbs={crumbs}/>
                <MyLabel nameLabel={'Update City: '}/>
                <FormCity
                    handleOnSubmit={handleOnSubmit}
                    initialDataForm={dataUpdate}
                />
            </Layout>
        </div>
    );
};

export default CityUpdate;