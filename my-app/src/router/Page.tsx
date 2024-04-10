import React from 'react';
import {Routes, Route} from "react-router-dom";
import CityList from "../feature/Admin/CityList";
import CityCreate from "../feature/Admin/CityCreate";
import CityDetail from "../feature/Admin/CityDetail";
import CityUpdate from "../feature/Admin/CityUpdate";

function Page() {
    return (
        <Routes>
            <Route path="/" element={<CityList />} />
            <Route path="/create" element={<CityCreate />} />
            <Route path="/detail" element={<CityDetail />} />
            <Route path="/edit" element={<CityUpdate />}/>
        </Routes>
    );
}
export default Page;