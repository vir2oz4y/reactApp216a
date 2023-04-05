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
import MuzychenkoTest1Page from "../StudentPage/MuzychenkoStacy/test1/MuzychenkoTest1Page";
import MuzychenkoTest2Page from "../StudentPage/MuzychenkoStacy/test2/MuzychenkoTest2Page";
import MuzychenkoPostavschiki from "../StudentPage/MuzychenkoStacy/postavschiki/MuzychenkoPostavschiki";
import MuzychenkoTovari from "../StudentPage/MuzychenkoStacy/tovari/MuzychenkoTovari";
import MuzychenkoClients from "../StudentPage/MuzychenkoStacy/clients/MuzychenkoClients";
import MuzychenkoZakazi from "../StudentPage/MuzychenkoStacy/zakazi/MuzychenkoZakazi";
import MuzychenkoKategorii from "../StudentPage/MuzychenkoStacy/kategorii/MuzychenkoKategorii";


const RouteComponent = () => {

    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<MainPage/>}>
                    <Route index element={<StudentsPage/>}/>

                    <Route path={'teacher'} element={<KryuchkovNickPage/>}/>
                    <Route path={'akyuzleyla'} element={<AkyuzLeylaPage/>}/>
                    <Route path={'brikkersasha'} element={<BrikkerSashaPage/>}/>
                    <Route path={'SnegirevaPolina'} element={<SnegirevaPolinaPage/>}/>
                    <Route path={'MuzychenkoStacy'} element={<MuzychenkoStacyPage/>}>
                        <Route path={'test1'} element={<MuzychenkoTest1Page/>}/>
                        <Route path={'test2'} element={<MuzychenkoTest2Page/>}/>
                        <Route path={'postavschiki'} element={<MuzychenkoPostavschiki/>}/>
                        <Route path={'tovari'} element={<MuzychenkoTovari/>}/>
                        <Route path={'clients'} element={<MuzychenkoClients/>}/>
                        <Route path={'zakazi'} element={<MuzychenkoZakazi/>}/>
                        <Route path={'kategorii'} element={<MuzychenkoKategorii/>}/>
                    </Route>
                    <Route path={'ZhukovaLiza'} element={<ZhukovaLizaPage/>}/>
                    <Route path={'Baidina Elena'} element={<BaidinaElenaPage/>}/>
                    <Route path={'SysolovNikita'} element={<SysolovNikitaPage/>}/>
                    <Route path={'vik'} element={<TitovecVikPage/>}/>

                </Route>
            </Routes>
        </HashRouter>
    );
};

export default RouteComponent;