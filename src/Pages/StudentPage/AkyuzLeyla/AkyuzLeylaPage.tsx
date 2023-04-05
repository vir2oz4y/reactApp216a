import React from 'react';
import Header from "../../../Components/Header/Header";
import ContentBlock from "../../../Components/ContentBlock/ContentBlock";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Outlet, useNavigate } from 'react-router-dom';
const AkyuzLeylaPage = () => {
    const navigate = useNavigate();
    return (
        <div>
            <Header studentFio={'Akyuz Leyla'} />

            <ContentBlock>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton onClick={() => navigate('test1')} >

                            <ListItemText primary="Test1" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton onClick={() => navigate('test2')}>
                            <ListItemText primary="Test2" />
                        </ListItemButton>

                    </ListItem>
                     
                <ListItem disablePadding>
                    <ListItemButton onClick={() => navigate('category')} >

                        <ListItemText primary="category" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton onClick={() => navigate('postavshiki')} >

                        <ListItemText primary="postavshiki" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton onClick={() => navigate('tovari')} >

                        <ListItemText primary="tovari" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton onClick={() => navigate('client')} >

                        <ListItemText primary="client" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton onClick={() => navigate('zakazi')} >

                        <ListItemText primary="zakazi" />
                    </ListItemButton>
                </ListItem>
                </List>

                <Outlet/>
            </ContentBlock>
        </div>
    );
};

export default AkyuzLeylaPage;