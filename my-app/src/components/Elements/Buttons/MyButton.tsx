import React from 'react';
import { useNavigate } from "react-router-dom";
const MyButton = ({children,onClick, styleModify, link, onSubmit, type="submit"} : any) => {
    return (
        <div>
             <button onClick={onClick} type={type} className={styleModify}>
                 {children}
             </button>
        </div>
    );
};

export default MyButton;