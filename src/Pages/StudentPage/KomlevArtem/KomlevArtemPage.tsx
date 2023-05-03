import React from 'react';
import Header from "../../../Components/Header/Header";
import ContentBlock from "../../../Components/ContentBlock/ContentBlock";
import {List, ListItem, ListItemButton, ListItemText} from "@mui/material";
import {Outlet, useNavigate} from "react-router-dom";
import axios from "axios";

const komlevAxios = axios.create();

const KomlevArtemPage = () => {

    const navigate=useNavigate();
    return (
        <div>
            <Header studentFio={'Комлев Артем'}/>

            <ContentBlock>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton onClick={()=>navigate('Category')}>
                            <ListItemText primary='Category' />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton onClick={()=>navigate('Client')}>
                            <ListItemText primary='Client' />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton onClick={()=>navigate('Goods')}>
                            <ListItemText primary='Manufacturer' />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton onClick={()=>navigate('Order')}>
                            <ListItemText primary='Order' />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton onClick={()=>navigate('Providers')}>
                            <ListItemText primary='Product' />
                        </ListItemButton>
                    </ListItem>

                </List>

                <Outlet/>
            </ContentBlock>
        </div>
    );
};

export default KomlevArtemPage;