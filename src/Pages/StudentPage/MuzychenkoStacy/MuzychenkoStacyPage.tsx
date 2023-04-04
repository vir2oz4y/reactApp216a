import React from 'react';
import Header from "../../../Components/Header/Header";
import ContentBlock from "../../../Components/ContentBlock/ContentBlock";
import {List, ListItem, ListItemButton, ListItemText} from "@mui/material";
import {useNavigate} from "react-router-dom";

const MuzychenkoStacyPage = () => {

    const navigate = useNavigate();
    return (
        <div>
            <Header studentFio={'Музыченко Анастасия'}/>

            <ContentBlock>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton
                            onClick={()=>navigate('test1')}
                        >
                            <ListItemText primary="Test1" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton
                            onClick={()=>navigate('test2')}
                        >
                            <ListItemText primary="Test2" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </ContentBlock>
        </div>
    );
};

export default MuzychenkoStacyPage;