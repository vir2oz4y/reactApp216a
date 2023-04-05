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
import Snegirevatest2Page from "../StudentPage/SnegirevaPolina/test2/Snegirevatest2Page";
import Snegirevatest1Page from "../StudentPage/SnegirevaPolina/test1/Snegirevatest1Page";
import Snegirevapostavschiki from "../StudentPage/SnegirevaPolina/postavschiki/Snegirevapostavschiki";
import Snegirevatovari from "../StudentPage/SnegirevaPolina/tovari/Snegirevatovari";
import Snegirevaclients from "../StudentPage/SnegirevaPolina/clients/Snegirevaclients";
import Snegirevazakazi from "../StudentPage/SnegirevaPolina/zakazi/Snegirevazakazi";
import Snegirevakategorii from "../StudentPage/SnegirevaPolina/kategorii/Snegirevakategorii";


const RouteComponent = () => {

    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<MainPage/>}>
                    <Route index element={<StudentsPage/>}/>

                    <Route path={'teacher'} element={<KryuchkovNickPage/>}/>
                    <Route path={'akyuzleyla'} element={<AkyuzLeylaPage/>}/>
                    <Route path={'brikkersasha'} element={<BrikkerSashaPage/>}/>
                    <Route path={'SnegirevaPolina'} element={<SnegirevaPolinaPage/>}>
                        <Route path={'test1'} element={<Snegirevatest1Page/>}/>
                        <Route path={'test2'} element={<Snegirevatest2Page/>}/>
                        <Route path={'postavschiki'} element={<Snegirevapostavschiki/>}/>
                        <Route path={'tovari'} element={<Snegirevatovari/>}/>
                        <Route path={'clients'} element={<Snegirevaclients/>}/>
                        <Route path={'zakazi'} element={<Snegirevazakazi/>}/>
                        <Route path={'kategorii'} element={<Snegirevakategorii/>}/>

                    </Route>

                    <Route path={'MuzychenkoStacy'} element={<MuzychenkoStacyPage/>}/>
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