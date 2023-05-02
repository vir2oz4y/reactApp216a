
import React, {useState} from 'react';
import KomlevPopup, {IPopup} from "../../../../../Components/Komlev/KomlevPopup/KomlevPopup";
import {Button, TextField} from "@mui/material";
import {Category} from "../Models";

type Props = IPopup & {
    onCreate:(category:Category) =>void;
}
const CreateCategoryPopup = ({open, onClose, onCreate}:Props) => {

    const [categoryName, setCategoryName] = useState('')

    const onCreateClick = () =>{
        onCreate({
            id:Math.random(),
            name:categoryName
        })
        onClose();
    }

    return (
        <KomlevPopup
            open={open}
            onClose={()=>onClose()}
            title={'Создание категории'}
        >
            <div style={{display:'flex', flexDirection:'column', gap:'1em'}}>
                <TextField
                    label="Название категории"
                    variant="standard"
                    value = {categoryName}
                    onChange={(e)=>setCategoryName(e.target.value)}
                />

                <div style={{display:'flex', justifyContent: 'center'}}>
                    <Button
                        color={'primary'}
                        variant={'contained'}
                        onClick={()=>onCreateClick()}
                    >
                        Создать
                    </Button>
                </div>
            </div>
        </KomlevPopup>
    );
};

export default CreateCategoryPopup;