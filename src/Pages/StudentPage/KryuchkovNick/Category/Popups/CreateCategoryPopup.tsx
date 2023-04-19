import React, {useState} from 'react';
import KryuchkovPopup, {IPopup} from "../../../../../Components/Kryuchkov/KryuchkovPopup/KryuchkovPopup";
import {Button, TextField} from "@mui/material";
import {Category} from "../models";

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
    }

    return (
        <KryuchkovPopup
            open={open}
            onClose={()=>onClose()}
            title={'Создание категории'}
        >
            <div style={{display:'flex', flexDirection:'column', gap:'1em'}}>
                <TextField
                    label="Название категории"
                    variant="standard"
                />

                <div style={{display:'flex', justifyContent: 'center'}}>
                    <Button
                        color={'primary'}
                        variant={'contained'}
                    >
                        Создать
                    </Button>
                </div>
            </div>
        </KryuchkovPopup>
    );
};

export default CreateCategoryPopup;