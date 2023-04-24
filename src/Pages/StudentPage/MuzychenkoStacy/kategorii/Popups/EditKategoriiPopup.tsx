import React, {useState} from 'react';
import MuzychenkoPopup, {IPopup} from "../../../../../Components/Muzychenko/MuzychenkoPopup/MuzychenkoPopup";
import {Button, TextField} from "@mui/material";
import {Kategorii} from "../models";

type Props = IPopup &{
    onEdit:(category:Kategorii) =>void;
    category:Kategorii
}
const EditKategoriiPopup = ({open,onClose, onEdit, category:categoryProp}:Props) => {

    const [category, setCategory] = useState(categoryProp);

    const onEditClick = () =>{
        onEdit(category);
        onClose();
    }

    return (<MuzychenkoPopup
                open={open}
                onClose={()=>onClose()}
                title={'Редактиование категории'}
             >
            <div style={{display:'flex', flexDirection:'column', gap:'1em'}}>
                <TextField
                    label="Название категории"
                    variant="standard"
                    value={category.name}
                    onChange={(e)=>
                        setCategory(prev=>({...prev, name:e.target.value}))}
                />
                <div style={{display:'flex', justifyContent:'center'}}>
                    <Button
                        color={'primary'}
                        variant={'contained'}
                        onClick={()=>onEditClick()}
                    >
                        Изменить
                    </Button>
                </div>
            </div>
    </MuzychenkoPopup>
)
}



export default EditKategoriiPopup;