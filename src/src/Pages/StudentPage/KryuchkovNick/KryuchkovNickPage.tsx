import React from 'react';
import Header from "../../../Components/Header/Header";
import ContentBlock from "../../../Components/ContentBlock/ContentBlock";
import {List, ListItem, ListItemButton, ListItemText} from '@mui/material';
import {Outlet, useNavigate} from "react-router-dom";


const KryuchkovNickPage = () => {

    const navigate = useNavigate();

    return (
        <div>
            <Header studentFio={'Крючков Николай'}/>

            <ContentBlock>
                <div style={{display: 'flex', gap:'1em'}}>
                    <List style={{width: '200px'}}>
                        <ListItem disablePadding>
                            <ListItemButton onClick={() => navigate('Category')}>
                                <ListItemText primary="Категории"/>
                            </ListItemButton>
                        </ListItem>

                        <ListItem disablePadding>
                            <ListItemButton onClick={() => navigate('Providers')}>
                                <ListItemText primary="Поставщики"/>
                            </ListItemButton>
                        </ListItem>

                        <ListItem disablePadding>
                            <ListItemButton onClick={() => navigate('Clients')}>
                                <ListItemText primary="Клиенты"/>
                            </ListItemButton>
                        </ListItem>

                        <ListItem disablePadding>
                            <ListItemButton onClick={() => navigate('Goods')}>
                                <ListItemText primary="Товары"/>
                            </ListItemButton>
                        </ListItem>

                        <ListItem disablePadding>
                            <ListItemButton onClick={() => navigate('Orders')}>
                                <ListItemText primary="Заказы"/>
                            </ListItemButton>
                        </ListItem>

                    </List>

                    <Outlet/>
                </div>

            </ContentBlock>
        </div>
    );
};

export default KryuchkovNickPage;