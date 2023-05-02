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
import KomlevCategoryPage from "../StudentPage/KomlevArtem/Category/KomlevCategoryPage";
import KomlevClientPage from "../StudentPage/KomlevArtem/Client/KomlevClientPage";
import KomlevGoodsPage from "../StudentPage/KomlevArtem/Goods/KomlevGoodsPage";
import KomlevOrderPage from "../StudentPage/KomlevArtem/Order/KomlevOrderPage";
import KomlevProvidersPage from "../StudentPage/KomlevArtem/Providers/KomlevProvidersPage";


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
                        <Route path={'Category'} element={<KomlevCategoryPage />} />
                        <Route path={'Client'} element={<KomlevClientPage />} />
                        <Route path={'Goods'} element={<KomlevGoodsPage />} />
                        <Route path={'Order'} element={<KomlevOrderPage />} />
                        <Route path={'Providers'} element={<KomlevProvidersPage />} />

                    </Route>

                </Route>
            </Routes>
        </HashRouter>
    );
};

export default RouteComponent;