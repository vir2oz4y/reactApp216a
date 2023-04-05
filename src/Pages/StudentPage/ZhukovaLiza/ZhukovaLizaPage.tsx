import React from 'react';
import Header from "../../../Components/Header/Header";
import ContentBlock from "../../../Components/ContentBlock/ContentBlock";
import {List, ListItem, ListItemButton, ListItemText} from "@mui/material";
import {useNavigate} from "react-router-dom";

const ZhukovaLizaPage = () => {
    const navigate = useNavigate();
    return (
        <div>
            <Header studentFio={'Жукова Лиза'}/>

            <ContentBlock>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton
                                onClick={()=>navigate('Test1')}

                        >
                            <ListItemText primary="Test1" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton
                            onClick={()=>navigate('Test2')}
                        >
                            <ListItemText primary="Test2" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </ContentBlock>
        </div>
    );
};

export default ZhukovaLizaPage;