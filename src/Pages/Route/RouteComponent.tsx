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

import Snegirevatest2Page from "../StudentPage/SnegirevaPolina/test2/Snegirevatest2Page";
import Snegirevatest1Page from "../StudentPage/SnegirevaPolina/test1/Snegirevatest1Page";
import Snegirevapostavschiki from "../StudentPage/SnegirevaPolina/postavschiki/Snegirevapostavschiki";
import Snegirevatovari from "../StudentPage/SnegirevaPolina/tovari/Snegirevatovari";
import Snegirevaclients from "../StudentPage/SnegirevaPolina/clients/Snegirevaclients";
import Snegirevazakazi from "../StudentPage/SnegirevaPolina/zakazi/Snegirevazakazi";
import Snegirevakategorii from "../StudentPage/SnegirevaPolina/kategorii/Snegirevakategorii";

import MuzychenkoTest1Page from "../StudentPage/MuzychenkoStacy/test1/MuzychenkoTest1Page";
import MuzychenkoTest2Page from "../StudentPage/MuzychenkoStacy/test2/MuzychenkoTest2Page";
import MuzychenkoPostavschiki from "../StudentPage/MuzychenkoStacy/postavschiki/MuzychenkoPostavschiki";
import MuzychenkoTovari from "../StudentPage/MuzychenkoStacy/tovari/MuzychenkoTovari";
import MuzychenkoClients from "../StudentPage/MuzychenkoStacy/clients/MuzychenkoClients";
import MuzychenkoZakazi from "../StudentPage/MuzychenkoStacy/zakazi/MuzychenkoZakazi";
import MuzychenkoKategorii from "../StudentPage/MuzychenkoStacy/kategorii/MuzychenkoKategorii";

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
                    
                    <Route path={'MuzychenkoStacy'} element={<MuzychenkoStacyPage/>}>
                        <Route path={'test1'} element={<MuzychenkoTest1Page/>}/>
                        <Route path={'test2'} element={<MuzychenkoTest2Page/>}/>
                        <Route path={'postavschiki'} element={<MuzychenkoPostavschiki/>}/>
                        <Route path={'tovari'} element={<MuzychenkoTovari/>}/>
                        <Route path={'clients'} element={<MuzychenkoClients/>}/>
                        <Route path={'zakazi'} element={<MuzychenkoZakazi/>}/>
                        <Route path={'kategorii'} element={<MuzychenkoKategorii/>}/>
                    </Route>
                    
                    <Route path={'SysolovNikita'} element={<SysolovNikitaPage/>}/>
                    <Route path={'vik'} element={<TitovecVikPage/>}/>

                    <Route path={'teacher'} element={<KryuchkovNickPage />} />
                    <Route path={'akyuzleyla'} element={<AkyuzLeylaPage />} />
                    <Route path={'brikkersasha'} element={<BrikkerSashaPage />} />

                   <Route path={'ZhukovaLiza'} element={<ZhukovaLizaPage/>} >
                        <Route path={'test1'} element={<ZhukovaTest1Page/>} />
                        <Route path={'test2'} element={<ZhukovaTest2Page/>} />
                        <Route path={'Category1'} element={<ZhukovaCategoryPage/>} />
                        <Route path={'Clients1'} element={<ZhukovaClientsPage/>} />
                        <Route path={'Orders1'} element={<ZhukovaOrdersPage/>} />
                        <Route path={'Goods1'} element={<ZhukovaGoodsPage/>} />
                        <Route path={'Providers1'} element={<ZhukovaProvidersPage/>} />
                    </Route>
                    
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