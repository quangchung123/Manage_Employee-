import React, {useEffect, useState} from 'react';
import InputField from "../Input/InputField";
import MyButton from "../Buttons/MyButton";
import styles from "../../../feature/styles/CityCreate.module.scss";

export const initState = {
    id: undefined,
    name: "",
    province: "",
    country: ""
}
const FormCity = ({handleOnSubmit, initialDataForm = initState }: any) => {
    const [dataForm, setDataForm] = useState(initialDataForm);
    useEffect(() => {
        setDataForm(initialDataForm);
    }, [initialDataForm]);
    const handleOnChange = (field: string) => (event: any) => {
        setDataForm((prevState: any) => ({
            ...prevState,
            [field]: event.target.value
        }));
    }
    const handleSubmit = (e: any) => {
        e.preventDefault();
        handleOnSubmit(dataForm);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                    <InputField onChange={handleOnChange("name")} value={dataForm.name} />
                </div>
                <div>
                    <label>Province</label>
                    <InputField onChange={handleOnChange("province")} value={dataForm.province} />
                </div>
                <div>
                    <label>Country</label>
                    <InputField onChange={handleOnChange("country")} value={dataForm.country}/>
                </div>
                <MyButton styleModify={styles.btnCreate}>
                    <span>Save</span>
                </MyButton>
            </form>
        </div>
    );
};

export default FormCity;