import React, {useState} from 'react';
import KryuchkovPopup, {IPopup} from "../../../../../Components/Kryuchkov/KryuchkovPopup/KryuchkovPopup";
import {Button, TextField} from "@mui/material";
import {Category} from "../models";

type Props = IPopup & {
    onEdit: (category: Category) => void;
    category: Category
}

const EditCategoryPopup = ({
                               open,
                               onClose,
                               onEdit,
                               category: categoryProp
                           }: Props) => {

    const [category, setCategory] = useState(categoryProp);

    const onEditClick = () => {
        onEdit(category);
        onClose();
    }

    return (
        <MarkAlex22Popup
            open={open}
            onClose={() => onClose()}
            title={'Редактирование категории'}
        >
            <div style={{display: 'flex', flexDirection: 'column', gap: '1em'}}>
                <TextField
                    label="Название категории"
                    variant="standard"
                    value={category.name}
                    onChange={(e) =>
                        setCategory(prev=>({...prev, name:e.target.value}))
                    }
                />

                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <Button
                        color={'primary'}
                        variant={'contained'}
                        onClick={() => onEditClick()}
                    >
                        Изменить
                    </Button>
                </div>
            </div>
        </MarkAlex22Popup>
    );
};

export default EditCategoryPopup;