import React from 'react';
import {
    Routes,
    Route, HashRouter,
} from "react-router-dom";
import MainPage from "../MainPage";
import StudentsPage from "../StudentsPage";
import KryuchkovNickPage from "../StudentPage/KryuchkovNick/KryuchkovNickPage";
import BaidinaElenaPage from "../StudentPage/BaidinaElena/BaidinaElenaPage";

const RouteComponent = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<MainPage/>}>
                    <Route index element={<StudentsPage/>} />

                    <Route path={'teacher'} element={<KryuchkovNickPage/>} />
                    <Route path={'Baidina Elena'} element={<BaidinaElenaPage/>} />
                </Route>
            </Routes>
        </HashRouter>
    );
};

export default RouteComponent;