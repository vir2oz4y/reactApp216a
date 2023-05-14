import React from 'react';
import Header from "../../../Components/Header/Header";
import ContentBlock from "../../../Components/ContentBlock/ContentBlock";
import {List, ListItem, ListItemButton, ListItemText} from "@mui/material";
import {Outlet, useNavigate} from "react-router-dom";

const BaidinaElenaPage = () => {

    const navigate=useNavigate();
    return (
        <div>
            <Header studentFio={'Байдина Елена'}/>

            <ContentBlock>
                <div style={{display:'flex'}}>
                    <List style={{width:"300px"}}>
                        <ListItem disablePadding>
                            <ListItemButton onClick={()=>navigate('test1')}>
                                <ListItemText primary="Test1" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton onClick={()=>navigate('test2')}>
                                <ListItemText primary="Test2" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton onClick={()=>navigate('Postavshiki')}>
                                <ListItemText primary="Postavshiki" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton onClick={()=>navigate('Tovari')}>
                                <ListItemText primary="Tovari" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton onClick={()=>navigate('Klienti')}>
                                <ListItemText primary="Klienti" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton onClick={()=>navigate('Zakazi')}>
                                <ListItemText primary="Zakazi" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton onClick={()=>navigate('Kategori')}>
                                <ListItemText primary="Kategori" />
                            </ListItemButton>
                        </ListItem>
                    </List>

                    <Outlet/>
                </div>

            </ContentBlock>
        </div>
    );
};

export default BaidinaElenaPage;