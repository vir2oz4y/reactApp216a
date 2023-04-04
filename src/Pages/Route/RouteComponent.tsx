import React from 'react';
import {
    Routes,
    Route, HashRouter,
} from "react-router-dom";
import MainPage from "../MainPage";
import StudentsPage from "../StudentsPage";

import KryuchkovNickPage from "../StudentPage/KryuchkovNick/KryuchkovNickPage";
import ZhukovaLizaPage from "../StudentPage/ZhukovaLiza/ZhukovaLizaPage";
import BaidinaElenaPage from "../StudentPage/BaidinaElena/BaidinaElenaPage";
import SysolovNikitaPage from "../StudentPage/SysolovNikita/SysolovNikitaPage";


const RouteComponent = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<MainPage/>}>
                    <Route index element={<StudentsPage/>} />

                    <Route path={'teacher'} element={<KryuchkovNickPage/>} />

                    <Route path={'ZhukovaLiza'} element={<ZhukovaLizaPage/>} />

                    <Route path={'Baidina Elena'} element={<BaidinaElenaPage/>} />

                    <Route path={'SysolovNikita'} element={<SysolovNikitaPage/>} />

                </Route>
            </Routes>
        </HashRouter>
    );
};

export default RouteComponent;