import React from 'react';
import Header from "../../../Components/Header/Header";
import ContentBlock from "../../../Components/ContentBlock/ContentBlock";
import {List, ListItem, ListItemButton, ListItemText} from "@mui/material";
import {Outlet, useNavigate} from "react-router-dom";

const SysolovNikitaPage = () => {

    const navigate = useNavigate();

    return (
        <div>
            <Header studentFio={'Сысолов Никита'}/>

            <ContentBlock>
                <div style={{display:"flex"}}>
                    <List style={{width:"250px"}}>

                        <ListItem disablePadding>
                            <ListItemButton onClick={()=>navigate('Category1')}>
                                <ListItemText primary="Category" style={{textAlign:"center"}}/>
                            </ListItemButton>
                        </ListItem>

                        <ListItem disablePadding>
                            <ListItemButton onClick={()=>navigate('Clients1')}>
                                <ListItemText primary="Clients" style={{textAlign:"center"}}/>
                            </ListItemButton>
                        </ListItem>

                        <ListItem disablePadding>
                            <ListItemButton onClick={()=>navigate('Goods1')}>
                                <ListItemText primary="Goods" style={{textAlign:"center"}}/>
                            </ListItemButton>
                        </ListItem>

                        <ListItem disablePadding>
                            <ListItemButton onClick={()=>navigate('Orders1')}>
                                <ListItemText primary="Orders" style={{textAlign:"center"}}/>
                            </ListItemButton>
                        </ListItem>

                        <ListItem disablePadding>
                            <ListItemButton onClick={()=>navigate('Providers1')}>
                                <ListItemText primary="Providers" style={{textAlign:"center"}}/>
                            </ListItemButton>
                        </ListItem>
                    </List>

                    <Outlet/>
                </div>


            </ContentBlock>
        </div>
    );
};

export default SysolovNikitaPage;