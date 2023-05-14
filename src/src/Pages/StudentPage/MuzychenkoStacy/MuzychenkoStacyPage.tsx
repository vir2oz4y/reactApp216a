import React from 'react';
import Header from "../../../Components/Header/Header";
import ContentBlock from "../../../Components/ContentBlock/ContentBlock";
import {List, ListItem, ListItemButton, ListItemText} from "@mui/material";
import {Outlet, useNavigate} from "react-router-dom";

const MuzychenkoStacyPage = () => {

    const navigate = useNavigate();
    return (
        <div>
            <Header studentFio={'Музыченко Анастасия'}/>

            <ContentBlock>
                <div style={{display:'flex'}}>
                    <List style={{width:"200px"}}>
                        <ListItem disablePadding>
                            <ListItemButton
                                onClick={() => navigate('test1')}
                            >
                                <ListItemText primary="Test1"/>
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton
                                onClick={() => navigate('test2')}
                            >
                                <ListItemText primary="Test2"/>
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton
                                onClick={() => navigate('Postavschiki')}
                            >
                                <ListItemText primary="Поставщики"/>
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton
                                onClick={() => navigate('Tovari')}
                            >
                                <ListItemText primary="Товары"/>
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton
                                onClick={() => navigate('Clients')}
                            >
                                <ListItemText primary="Клиенты"/>
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton
                                onClick={() => navigate('Zakazi')}
                            >
                                <ListItemText primary="Заказы"/>
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton
                                onClick={() => navigate('Kategorii')}
                            >
                                <ListItemText primary="Категории"/>
                            </ListItemButton>
                        </ListItem>
                    </List>

                    <Outlet/>
                </div>

            </ContentBlock>
        </div>
    );
};

export default MuzychenkoStacyPage;