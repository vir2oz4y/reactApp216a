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
import Test1Baidina from "../StudentPage/BaidinaElena/Test1/Test1Baidina";
import Test2Baidina from "../StudentPage/BaidinaElena/Test2/Test2Baidina";
import PostavshikiBaidina from "../StudentPage/BaidinaElena/Postavshiki/PostavshikiBaidina";
import TovariBaidina from "../StudentPage/BaidinaElena/Tovari/TovariBaidina";
import KlientiBaidina from "../StudentPage/BaidinaElena/Klienti/KlientiBaidina";
import ZakaziBaidina from "../StudentPage/BaidinaElena/Zakazi/ZakaziBaidina";
import KategoriBaidina from "../StudentPage/BaidinaElena/Kategori/KategoriBaidina";


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
                    <Route path={'Baidina Elena'} element={<BaidinaElenaPage/>} >
                        <Route path={'test1'} element={<Test1Baidina/>}/>
                        <Route path={'test2'} element={<Test2Baidina/>}/>
                        <Route path={'Postavshiki'} element={<PostavshikiBaidina/>}/>
                        <Route path={'Tovari'} element={<TovariBaidina/>}/>
                        <Route path={'Klienti'} element={<KlientiBaidina/>}/>
                        <Route path={'Zakazi'} element={<ZakaziBaidina/>}/>
                        <Route path={'Kategori'} element={<KategoriBaidina/>}/>
                    </Route>
                    <Route path={'SysolovNikita'} element={<SysolovNikitaPage/>} />
                    <Route path={'vik'} element={<TitovecVikPage />} />

                </Route>
            </Routes>
        </HashRouter>
    );
};

export default RouteComponent;