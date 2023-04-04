import React from 'react';
import Header from "../../../Components/Header/Header";
import ContentBlock from "../../../Components/ContentBlock/ContentBlock";
import {List, ListItem, ListItemButton, ListItemText} from '@mui/material';
import {useNavigate} from "react-router-dom";

const SnegirevaPolinaPage = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Header studentFio={'Снегирева Полина'}/>

            <ContentBlock>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton
                        onClick ={()=>navigate('test1')}
                        >
                            <ListItemText primary="test1" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding
                              onClick ={()=>navigate('test1')}
                    >
                            <ListItemText primary="test2" />
                    </ListItem>
                </List>
            </ContentBlock>
        </div>
    );
};

export default SnegirevaPolinaPage;