import React from 'react';
import {
    Routes,
    Route, HashRouter,
} from "react-router-dom";
import MainPage from "../MainPage";
import StudentsPage from "../StudentsPage";
import KryuchkovNickPage from "../StudentPage/KryuchkovNick/KryuchkovNickPage";
import MuzychenkoStacyPage from "../StudentPage/MuzychenkoStacy/MuzychenkoStacyPage";

const RouteComponent = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<MainPage/>}>
                    <Route index element={<StudentsPage/>} />

                    <Route path={'teacher'} element={<KryuchkovNickPage/>} />

                    <Route path={'MuzychenkoStacy'} element={<MuzychenkoStacyPage/>} />
                </Route>
            </Routes>
        </HashRouter>
    );
};

export default RouteComponent;