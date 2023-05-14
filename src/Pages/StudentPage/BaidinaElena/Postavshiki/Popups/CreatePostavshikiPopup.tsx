import React, {useState} from 'react';
import BaidinaPopup, {IProps} from "../../../../../Components/Baidina/BaidinaPopup/BaidinaPopup";
import {Button, TextField} from "@mui/material";
import {Postavshiki} from "../Models";

type Props = IProps & {
    onCreate:(postavshik:Postavshiki)=>void;
}
const CreatePostavshikiPopup = ({open,onClose, onCreate}:Props) => {
    const [postavshikName,setPostavshikName]=useState('')
    const onCreateClick=()=>{
        onCreate(
            {id:Math.random(),
                name:postavshikName}
        )
        onClose();
    }
    return (

        <BaidinaPopup
            open={open}
            onClose={() => onClose()}
            title={'Создание поставщика'}
        >
            <div>
                <TextField
                    label="Название поставщика"
                    variant="filled"
                    onChange={(e)=>setPostavshikName(e.target.value)}
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

export default CreatePostavshikiPopup;