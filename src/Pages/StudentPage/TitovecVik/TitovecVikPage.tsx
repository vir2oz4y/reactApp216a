import React from 'react';
import Header from "../../../Components/Header/Header";
import ContentBlock from "../../../Components/ContentBlock/ContentBlock";
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';



const TitovecVikPage = () => {
    return (
        <div>
            <Header studentFio={'Титовец Виктория'}/>

            <ContentBlock>
                大家好！
                
               
            </ContentBlock>
            <List>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemText primary="Test1" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemText primary="Test2" />
                    </ListItemButton>
                </ListItem>
            </List>
        </div>
    );
};

export default TitovecVikPage;