import React, {useState} from 'react';
import KomlevPopup, {IPopup} from "../../../../../Components/Komlev/KomlevPopup/KomlevPopup";
import {Category} from "../Models";
import {Button, TextField} from "@mui/material";


type Props = IPopup & {
    onEdit: (category: Category) => void;
    category: Category
}

const EditCategoryPopup = ({
                                open,
                                onClose,
                                onEdit,
                                category: categoryProp
                            }: Props) =>{
    const [category, setCategory] = useState(categoryProp);

    const onEditClick = () => {
        onEdit(category);
        onClose();
    }

    return (
        <KomlevPopup
            open={open}
            onClose={() => onClose()}
            title = {'Редактирование категории'}
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
                        onClick={() => onEditClick()}>
                        изменить
                    </Button>
                </div>
            </div>

        </KomlevPopup>
    );

};

export default EditCategoryPopup;