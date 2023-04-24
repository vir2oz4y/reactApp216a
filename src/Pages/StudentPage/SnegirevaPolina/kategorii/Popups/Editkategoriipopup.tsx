import React, {useState} from 'react';
import SnegirevaPopUp, {IPopup} from "../../../../../Components/Snegireva/SnegirevaPopUp/SnegirevaPopUp";
import {Button, TextField} from "@mui/material";
import {kategorii} from "../models";
type Props=IPopup&{
    onEdit:(kategorii:kategorii) => void;
    kategorii:kategorii
}
const Editkategoriipopup = ({open,onClose,onEdit,kategorii:categoryProp}:Props) => {
    const[kategorii,setCategory]=useState(categoryProp);
    const onEditClick=()=>{
        onEdit(kategorii);
        onClose();
    }
    return (
        <div>
            <SnegirevaPopUp
                open={open}
                onClose={()=>onClose}
                title={'Редактирование категории'}
            >
                <div style ={{display:'flex',flexDirection:'column',gap:'1em'}}>
                    <TextField
                        label="Название категории"
                        variant="standard"
                        value={kategorii.name}
                        onChange={(e)=>
                            setCategory(prev=>({...prev,name:e.target.value}))
                        }
                    />
                    <div style={{display:'flex',justifyContent:'center'}}>
                        <Button
                            color={'primary'}
                            variant={'contained'}
                            onClick={()=>onEditClick()}
                        >
                            Изменить
                        </Button>
                    </div>
                </div>
            </SnegirevaPopUp>
        </div>
    );
};

export default Editkategoriipopup;