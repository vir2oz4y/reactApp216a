import React from 'react';
import Header from "../../../Components/Header/Header";
import ContentBlock from "../../../Components/ContentBlock/ContentBlock";
import {List, ListItem, ListItemButton, ListItemText} from '@mui/material';
import {Outlet, useNavigate} from "react-router-dom";

const LedovskayaOlgaPage = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Header studentFio={'Ледовская Ольга'}/>

            <ContentBlock>
                <div style={{display:'flex'}}>
                    <List style={{width:'200px'}}>
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
                                onClick={() => navigate('postavschiki')}
                            >
                                <ListItemText primary="Поставщики"/>
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton
                                onClick={() => navigate('tovari')}
                            >
                                <ListItemText primary="Товары"/>
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton
                                onClick={() => navigate('clients')}
                            >
                                <ListItemText primary="Клиенты"/>
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton
                                onClick={() => navigate('zakazi')}
                            >
                                <ListItemText primary="Заказы"/>
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton
                                onClick={() => navigate('kategorii')}
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

export default LedovskayaOlgaPage;