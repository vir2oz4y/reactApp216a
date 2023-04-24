import React, {useState} from 'react';
import MuzychenkoPopup, {IPopup} from "../../../../../Components/Muzychenko/MuzychenkoPopup/MuzychenkoPopup";
import {Button, TextField} from "@mui/material";
import {Kategorii} from "../models";

type Props = IPopup &{
    onCreate:(category:Kategorii) =>void;
}
const CreateKategoriiPopup = ({open,onClose, onCreate}:Props) => {

    const [categoryName, setCategoryName] = useState('')

    const onCreateClick = () =>{
        onCreate({
            id:Math.random(),
            name:categoryName
        })
        onClose();
    }
    return (
        <div>
            <MuzychenkoPopup
                open={open}
                onClose={()=>onClose()}
                title={'Создание категории'}
            >
                <div style={{display:'flex', flexDirection:'column', gap:'1em'}}>
                    <TextField
                        label="Название категории"
                        variant="standard"
                        value={categoryName}
                        onChange={(e)=>
                            setCategoryName(e.target.value)}
                    />
                    <div style={{display:'flex', justifyContent:'center'}}>
                        <Button
                            color={'primary'}
                            variant={'contained'}
                            onClick={()=>onCreateClick()}
                        >
                            Создать
                        </Button>
                    </div>
                </div>
            </MuzychenkoPopup>
        </div>
    );
};

export default CreateKategoriiPopup;