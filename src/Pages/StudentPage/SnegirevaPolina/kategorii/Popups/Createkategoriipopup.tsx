import React, {useState} from 'react';
import SnegirevaPopUp, {IPopup} from "../../../../../Components/Snegireva/SnegirevaPopUp/SnegirevaPopUp";
import {Button, TextField} from "@mui/material";
import {kategorii} from "../models";
type Props=IPopup&{
 onCreate:(kategorii:kategorii) => void;
}
const Createkategoriipopup = ({open,onClose,onCreate}:Props) => {
const[categoryName,setCategoryName]=useState('')
    const onCreateClick=()=>{
     onCreate( {
        id:Math.random(),
        name:categoryName
    })
    }
    return (
        <div>
            <SnegirevaPopUp
                open={open}
                onClose={()=>onClose}
                title={'Создние категории'}
            >
                <div style ={{display:'flex',flexDirection:'column',gap:'1em'}}>
                    <TextField
                               label="Название категории"
                               variant="standard"
                               value={categoryName}
                               onChange={(e)=>
                                setCategoryName(e.target.value)
                    }
                    />
                    <div style={{display:'flex',justifyContent:'center'}}>
                        <Button
                            color={'primary'}
                            variant={'contained'}
                            onClick={()=>onCreateClick()}
                            >
                            Создать
                        </Button>
                    </div>
                </div>
            </SnegirevaPopUp>
        </div>
    );
};

export default Createkategoriipopup;