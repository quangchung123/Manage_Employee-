import React from 'react';
import styles from "../Table/TableList.module.scss";
import {buttonActionOptions, initNavigate} from "../../config";
import * as cityService from "../../service/cityService";
import {BUTTON_ACTION_TYPE, STATUS_API} from "../../constant";
import {useNavigate} from "react-router-dom";

const IconActions = ({fetchApi, value}: any) => {
    const navigate = useNavigate();
    const handleRowAction = async (index: number, type: string) => {
        switch (type) {
            case BUTTON_ACTION_TYPE.DELETE_BUTTON: {
                const result = await cityService.deleteCity(index);
                if (result === STATUS_API.SUCCESS[1]) {
                    fetchApi();
                }
                break;
            }
            case BUTTON_ACTION_TYPE.EDIT_BUTTON: {
                navigate(`${initNavigate.edit}/${index}`);
                break;
            }
            case BUTTON_ACTION_TYPE.DETAIL_BUTTON: {
                navigate(`${initNavigate.edit}/${index}`);
                break;
            }
            default: {
                console.log("Action error")
            }
        }
    }
    return (
        <div>
            {
                buttonActionOptions.map((item) => {
                    return (
                        <button className={styles.btnAction} onClick={() => handleRowAction(value._id, item.type)}>
                            <img src={item.src} alt={item.alt}/>
                        </button>
                    )
                })
            }
        </div>
    );
};

export default IconActions;