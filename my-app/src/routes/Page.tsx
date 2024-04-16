import React from 'react';
import {Routes, Route} from "react-router-dom";
import CityList from "../feature/admin/CityList";
import CityCreate from "../feature/admin/CityCreate";
import CityDetail from "../feature/admin/CityDetail";
import CityUpdate from "../feature/admin/CityUpdate";

function Page() {
    return (
        <Routes>
            <Route path="/" element={<CityList />} />
            <Route path="/create" element={<CityCreate />} />
            <Route path="/detail/:id" element={<CityDetail />} />
            <Route path="/edit/:id" element={<CityUpdate />}/>
        </Routes>
    );
}
export default Page;