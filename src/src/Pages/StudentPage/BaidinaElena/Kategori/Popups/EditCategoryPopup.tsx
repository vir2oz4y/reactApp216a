import React, {useState} from 'react';
import BaidinaPopup, {IProps} from "../../../../../Components/Baidina/BaidinaPopup/BaidinaPopup";
import {Button, TextField} from "@mui/material";
import {Kategori} from "../Models";

type Props = IProps & {
    onEdit:(category:Kategori)=>void;
    category:Kategori;
}
const EditCategoryPopup = ({open,onClose, onEdit,category:categoryProp}:Props) => {

    const [category,setCategory]=useState(categoryProp);
    const onEditClick=()=>{
       onEdit(category);
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
                    value={category.name}
                    variant="filled"
                    onChange={(e)=>setCategory(prey=>({...prey,name:e.target.value}))}
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

export default EditCategoryPopup;