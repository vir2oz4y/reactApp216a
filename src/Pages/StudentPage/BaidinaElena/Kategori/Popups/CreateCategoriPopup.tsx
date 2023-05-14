import React, {useState} from 'react';
import BaidinaPopup, {IProps} from "../../../../../Components/Baidina/BaidinaPopup/BaidinaPopup";
import {Button, TextField} from "@mui/material";
import {Kategori} from "../Models";

type Props = IProps & {
onCreate:(category:Kategori)=>void;
}
const CreateCategoriPopup = ({open,onClose, onCreate}:Props) => {
    const [categoryName,setCategoryName]=useState('')
    const onCreateClick=()=>{
        onCreate(
            {id:Math.random(),
            name:categoryName}
        )
        onClose();
    }
    return (

        <BaidinaPopup
            open={open}
            onClose={() => onClose()}
            title={'Создание категории'}
        >
            <div>
                <TextField
                    label="Название категории"
                    variant="filled"
                    onChange={(e)=>setCategoryName(e.target.value)}
                />
                <div style={{display: "flex", justifyContent: 'center'}}>
                    <Button
                        color={'primary'}
                        variant={'contained'}
                        onClick={()=>onCreateClick()}

                    >
                        Создать
                    </Button>
                </div>
            </div>
        </BaidinaPopup>

    );
};

export default CreateCategoriPopup;