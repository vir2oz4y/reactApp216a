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
import ZhukovaTest2Page from "../StudentPage/ZhukovaLiza/Test2/ZhukovaTest2Page";
import ZhukovaTest1Page from "../StudentPage/ZhukovaLiza/Test1/ZhukovaTest1Page";
import ZhukovaProvidersPage from "../StudentPage/ZhukovaLiza/Providers/ZhukovaProvidersPage";
import ZhukovaCategoryPage from "../StudentPage/ZhukovaLiza/Category/ZhukovaCategoryPage";
import ZhukovaClientsPage from "../StudentPage/ZhukovaLiza/Clients/ZhukovaClientsPage";
import ZhukovaGoodsPage from "../StudentPage/ZhukovaLiza/Goods/ZhukovaGoodsPage";
import ZhukovaOrdersPage from "../StudentPage/ZhukovaLiza/Orders/ZhukovaOrdersPage";


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
                    <Route path={'ZhukovaLiza'} element={<ZhukovaLizaPage/>} >
                        <Route path={'test1'} element={<ZhukovaTest1Page/>} />
                        <Route path={'test2'} element={<ZhukovaTest2Page/>} />
                        <Route path={'Category1'} element={<ZhukovaCategoryPage/>} />
                        <Route path={'Clients1'} element={<ZhukovaClientsPage/>} />
                        <Route path={'Orders1'} element={<ZhukovaOrdersPage/>} />
                        <Route path={'Goods1'} element={<ZhukovaGoodsPage/>} />
                        <Route path={'Providers1'} element={<ZhukovaProvidersPage/>} />


                    </Route>
                    <Route path={'Baidina Elena'} element={<BaidinaElenaPage/>} />
                    <Route path={'SysolovNikita'} element={<SysolovNikitaPage/>} />
                    <Route path={'vik'} element={<TitovecVikPage />} />

                </Route>
            </Routes>
        </HashRouter>
    );
};

export default RouteComponent;