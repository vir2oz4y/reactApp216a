import React from 'react';
import Header from "../../../Components/Header/Header";
import ContentBlock from "../../../Components/ContentBlock/ContentBlock";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate } from 'react-router-dom';
const BrikkerSashaPage = () => {

    const navigate = useNavigate();

    return (

        <div>
            <Header studentFio={'Brikker Sasha'} />

            <ContentBlock>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton onClick={()=>navigate('test1')} >

                            <ListItemText primary="Test1" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton onClick={() => navigate('test2')}>
                            <ListItemText primary="Test2"/>
                        </ListItemButton>

                    </ListItem>
                </List>
            </ContentBlock>
        </div>
    );
};

export default BrikkerSashaPage;