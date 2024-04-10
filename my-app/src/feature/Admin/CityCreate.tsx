import React, {useEffect, useState} from 'react';
import Layout from "../../container/Layout";
import MyTab from "../../components/Elements/Tabbar/MyTab";
import MyLabel from "../../components/Elements/Label/MyLabel";
import InputField from "../../components/Elements/Input/InputField";
import MyButton from "../../components/Elements/Buttons/MyButton";
import {useStore} from "../../hooks";
import {createItem} from "../../store/Actions/actions";
import {Link, useNavigate} from "react-router-dom";

const initState = {
    name: "",
    province: "",
    country: ""
}

const CityCreate = () => {
    const [dataForm, setDataForm] = useState(initState);
    const navigate = useNavigate();
    const [state, dispatch] = useStore();
    const handleChange = (field: string) => (event: any) => {
        setDataForm(prevState => ({
            ...prevState,
            [field]: event.target.value
        }));
    }
    const handleSubmit = async (event : any) => {
        event.preventDefault();
        await dispatch(createItem(dataForm));
        navigate("/");
    }
    return (
        <div>
            <Layout>
                <MyTab />
                <MyLabel />
                <form>
                    <div>
                        <label>Name</label>
                        <InputField onChange={handleChange("name")} value={dataForm.name}/>
                    </div>
                    <div>
                        <label>Province</label>
                        <InputField onChange={handleChange("province")} value={dataForm.province}/>
                    </div>
                    <div>
                        <label>Country</label>
                        <InputField onChange={handleChange("country")} value={dataForm.country}/>
                    </div>
                    <MyButton onClick={handleSubmit}>
                        <span>Save</span>
                    </MyButton>
                </form>
            </Layout>
        </div>
    );
};

export default CityCreate;