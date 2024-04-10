import React, {useState} from 'react';
import MyTab from "../../components/Elements/Tabbar/MyTab";
import MyLabel from "../../components/Elements/Label/MyLabel";
import Layout from "../../container/Layout";
import InputField from "../../components/Elements/Input/InputField";
import MyButton from "../../components/Elements/Buttons/MyButton";
import {useStore} from "../../hooks";
import {editItem} from "../../store/Actions/actions";
import {useNavigate} from "react-router-dom";
const CityUpdate = () => {
    const [state, dispatch] = useStore();
    const {data, dataDetail} = state;
    const initialDataForm = dataDetail.length > 0 ? dataDetail[0] : {};
    const navigate = useNavigate();
    const [dataForm, setDataForm] = useState(initialDataForm);
    const handleChangeValue = (field: string) => (event: any) => {
        setDataForm((prevState: any) => ({
            ...prevState,
            [field]: event.target.value
        }));
    }
    const handleSubmit = async (event: any) => {
        event.preventDefault();
        const payload = {
            ...dataForm,
            id: initialDataForm.id,
        }
        await dispatch(editItem(payload));
        navigate('/');
    }
    return (
        <div>
            <Layout>
                <MyTab />
                <MyLabel />
                <form>
                    <div>
                        <label>Name</label>
                        <InputField value={dataForm.name} onChange={handleChangeValue('name')}/>
                    </div>
                    <div>
                        <label>Province</label>
                        <InputField value={dataForm.province} onChange={handleChangeValue('province')}/>
                    </div>
                    <div>
                        <label>Country</label>
                        <InputField value={dataForm.country} onChange={handleChangeValue('country')}/>
                    </div>
                    <MyButton onClick={handleSubmit}>
                        <span>Save</span>
                    </MyButton>
                </form>
            </Layout>
        </div>
    );
};

export default CityUpdate;