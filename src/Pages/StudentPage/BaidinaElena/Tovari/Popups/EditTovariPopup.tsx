import React, {useState} from 'react';
import BaidinaPopup, {IProps} from "../../../../../Components/Baidina/BaidinaPopup/BaidinaPopup";
import {Button, TextField} from "@mui/material";
import {Tovari} from "../Models";

type Props = IProps & {
    onEdit:(tovari:Tovari)=>void;
    tovari:Tovari;
}
const EditTovariPopup = ({open,onClose, onEdit,tovari:tovariProp}:Props) => {

    const [tovari,setTovari]=useState(tovariProp);
    const onEditClick=()=>{
       onEdit(tovari);
        onClose();
    }
    return (

        <BaidinaPopup
            open={open}
            onClose={() => onClose()}
            title={'Редактирование категории'}
        >
            <div>
                <TextField
                    label={'Название категории'}
                    value={tovari.name}
                    variant="filled"
                    onChange={(e)=>setTovari(prey=>({...prey,name:e.target.value}))}
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

export default EditTovariPopup;