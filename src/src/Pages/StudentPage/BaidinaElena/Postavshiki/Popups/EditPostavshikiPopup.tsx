import React, {useState} from 'react';
import BaidinaPopup, {IProps} from "../../../../../Components/Baidina/BaidinaPopup/BaidinaPopup";
import {Button, TextField} from "@mui/material";
import {Postavshiki} from "../Models";

type Props = IProps & {
    onEdit:(postavshik:Postavshiki)=>void;
    postavshik:Postavshiki;
}
const EditPostavshikiPopup = ({open,onClose, onEdit,postavshik:postavshikProp}:Props) => {

    const [postavshik,setPostavshik]=useState(postavshikProp);
    const onEditClick=()=>{
        onEdit(postavshik);
        onClose();
    }
    return (

        <BaidinaPopup
            open={open}
            onClose={() => onClose()}
            title={'Редактирование поставщика'}
        >
            <div>
                <TextField
                    label={'Название поставщика'}
                    value={postavshik.name}
                    variant="filled"
                    onChange={(e)=>setPostavshik(prey=>({...prey,name:e.target.value}))}
                />
                <div style={{display: "flex", justifyContent: 'center'}}>
                    <Button
                        color={'primary'}
                        variant={'contained'}
                        onClick={()=>onEditClick()}

                    >
                        Изменить
                    </Button>
                </div>
            </div>
        </BaidinaPopup>

    );
};

export default EditPostavshikiPopup;