import React, {useEffect, useState} from 'react';
import Layout from "../../container/Layout";
import MyLabel from "../../components/Elements/Label/MyLabel";
import {Link, useNavigate} from "react-router-dom";
import BreadCrumbs from "../../components/Elements/Breadcrumbs/BreadCrumbs";
import FormCity from "../../components/Elements/Form/FormCity";
import {LOCAL_STORAGE_KEY, STATUS_API} from "../../constant";
import {initCrumbCreate, initNavigate} from "../../config";
import * as cityService from "../../service/cityService";

const CityCreate = () => {
    const navigate= useNavigate();
    const [crumbs, setCrumbs] = useState(initCrumbCreate);
    const handleOnSubmit = async (dataForm: any) => {
        const result = await cityService.createCity(dataForm);
        if(result === STATUS_API.SUCCESS[0]) {
            navigate(initNavigate.home);
        }
    }
    return (
        <div>
            <Layout>
                <BreadCrumbs crumbs={crumbs} />
                <MyLabel nameLabel={'Create City'}/>
                <FormCity
                    handleOnSubmit={handleOnSubmit}
                />
            </Layout>
        </div>
    );
};

export default CityCreate;