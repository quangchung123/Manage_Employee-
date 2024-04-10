import React from 'react';
import { useNavigate } from "react-router-dom";
const MyButton = ({children,onClick, styleModify, link} : any) => {
    const navigate = useNavigate();
    const handleNavigate = (event: any) => {
        link ? navigate(link) : onClick(event);
    }
    return (
        <div>
             <button onClick={handleNavigate} className={styleModify}>
                 {children}
             </button>
        </div>
    );
};

export default MyButton;