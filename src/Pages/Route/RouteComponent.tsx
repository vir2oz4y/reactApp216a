import React from 'react';
import {
    Routes,
    Route, HashRouter,
} from "react-router-dom";
import MainPage from "../MainPage";
import StudentsPage from "../StudentsPage";

import KryuchkovNickPage from "../StudentPage/KryuchkovNick/KryuchkovNickPage";
import TitovecVikPage from "../StudentPage/TitovecVik/TitovecVikPage";
import SnegirevaPolinaPage from "../StudentPage/SnegirevaPolina/SnegirevaPolinaPage";
import MuzychenkoStacyPage from "../StudentPage/MuzychenkoStacy/MuzychenkoStacyPage";
import AkyuzLeylaPage from "../StudentPage/AkyuzLeyla/AkyuzLeylaPage";
import BrikkerSashaPage from "../StudentPage/BrikkerSasha/BrikkerSashaPage";
import ZhukovaLizaPage from "../StudentPage/ZhukovaLiza/ZhukovaLizaPage";
import BaidinaElenaPage from "../StudentPage/BaidinaElena/BaidinaElenaPage";
import SysolovNikitaPage from "../StudentPage/SysolovNikita/SysolovNikitaPage";
import KomlevArtemPage from "../StudentPage/KomlevArtem/KomlevArtemPage";
import KomlevTest2Page from "../StudentPage/KomlevArtem/Test2/KomlevTest2Page";
import KomlevTest1Page from "../StudentPage/KomlevArtem/Test1/KomlevTest1Page";
import KomlevTest3Page from "../StudentPage/KomlevArtem/Test3/KomlevTest3Page";
import KomlevTest4Page from "../StudentPage/KomlevArtem/Test4/KomlevTest4Page";
import KomlevTest5Page from "../StudentPage/KomlevArtem/Test5/KomlevTest5Page";


const RouteComponent = () => {

    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<MainPage/>}>
                    <Route index element={<StudentsPage/>} />

                    <Route path={'teacher'} element={<KryuchkovNickPage />} />
                    <Route path={'akyuzleyla'} element={<AkyuzLeylaPage />} />
                    <Route path={'brikkersasha'} element={<BrikkerSashaPage />} />
                    <Route path={'SnegirevaPolina'} element={<SnegirevaPolinaPage/>} />
                    <Route path={'MuzychenkoStacy'} element={<MuzychenkoStacyPage/>} />
                    <Route path={'ZhukovaLiza'} element={<ZhukovaLizaPage/>} />
                    <Route path={'Baidina Elena'} element={<BaidinaElenaPage/>} />
                    <Route path={'SysolovNikita'} element={<SysolovNikitaPage/>} />
                    <Route path={'vik'} element={<TitovecVikPage />} />
                    <Route path={'KomlevArtem'} element={<KomlevArtemPage />} >
                        <Route path={'Test1'} element={<KomlevTest1Page />} />
                        <Route path={'Test2'} element={<KomlevTest2Page />} />
                        <Route path={'Test3'} element={<KomlevTest3Page />} />
                        <Route path={'Test4'} element={<KomlevTest4Page />} />
                        <Route path={'Test5'} element={<KomlevTest5Page />} />

                    </Route>

                </Route>
            </Routes>
        </HashRouter>
    );
};

export default RouteComponent;