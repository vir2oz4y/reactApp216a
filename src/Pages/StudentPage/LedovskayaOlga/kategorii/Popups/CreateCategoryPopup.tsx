import React from 'react';
import LedovskayaPopup,{IPopup} from "";
import {Buttom, Button, TextField} from "@mui/material";

type Props = IPopup & {

}
const CreateCategoryPopup = ({open,onClose}:Props) => {
    return (
        <
            open = {open}
            onClose={onClose}
            title={'Создание категории'}


            <div style = {{display: 'flex', flexDirection: 'column', gap: '1em'}}>
                <TextField
                    label="Название категории"
                    variant="standart"
                />

                <div style={{display: 'flex', justiContent: 'center'}}>
                    <Button
                        color={'primary'}
                        variant={'contained'}

        <div>

        </div>
)
};