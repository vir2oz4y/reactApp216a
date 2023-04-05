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
import SysolovCategoryPage from "../StudentPage/SysolovNikita/Category/SysolovCategoryPage";
import SysolovClientsPage from "../StudentPage/SysolovNikita/Clients/SysolovClientsPage";
import SysolovGoodsPage from "../StudentPage/SysolovNikita/Goods/SysolovGoodsPage";
import SysolovOrdersPage from "../StudentPage/SysolovNikita/Orders/SysolovOrdersPage";
import SysolovProvidersPage from "../StudentPage/SysolovNikita/Providers/SysolovProvidersPage";


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
                    <Route path={'SysolovNikita'} element={<SysolovNikitaPage/>}>
                        <Route path={'Category1'} element={<SysolovCategoryPage/>}/>
                        <Route path={'Clients1'} element={<SysolovClientsPage/>}/>
                        <Route path={'Goods1'} element={<SysolovGoodsPage/>}/>
                        <Route path={'Orders1'} element={<SysolovOrdersPage/>}/>
                        <Route path={'Providers1'} element={<SysolovProvidersPage/>}/>
                    </Route>
                    <Route path={'vik'} element={<TitovecVikPage />} />

                </Route>
            </Routes>
        </HashRouter>
    );
};

export default RouteComponent;