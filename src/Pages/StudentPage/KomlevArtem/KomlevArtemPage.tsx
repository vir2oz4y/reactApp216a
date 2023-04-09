import React from 'react';
import Header from "../../../Components/Header/Header";
import ContentBlock from "../../../Components/ContentBlock/ContentBlock";
import {List, ListItem, ListItemButton, ListItemText} from "@mui/material";
import {Outlet, useNavigate} from "react-router-dom";


const KomlevArtemPage = () => {

    const navigate=useNavigate();
    return (
        <div>
            <Header studentFio={'Комлев Артем'}/>

            <ContentBlock>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton onClick={()=>navigate('StudentsPage')}>
                            <ListItemText primary="StudentsPage" />
                        </ListItemButton>
                    </ListItem>
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
                        <ListItemButton onClick={()=>navigate('test3')}>
                            <ListItemText primary="Test3" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton onClick={()=>navigate('test4')}>
                            <ListItemText primary="Test4" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton onClick={()=>navigate('test5')}>
                            <ListItemText primary="Test5" />
                        </ListItemButton>
                    </ListItem>
                </List>

                <Outlet/>
            </ContentBlock>
        </div>
    );
};

export default KomlevArtemPage;