import {Button, TextField} from '@mui/material';
import React, {useState} from 'react';
import SysolovPopup, {IPopup} from "../../../../../Components/Sysolov/SysolovPopup/SysolovPopup";
import {Category} from "../Models";

type Props = IPopup & {
    onEdit:(category:Category) => void;
    category:Category
}

const EditCategoryPopup = ({open, onClose, onEdit, category:categoryProp}:Props) => {

    const[category, setCategory] = useState(categoryProp);

    const onEditClick =()=>
    {
        onEdit(category);
        onClose()
    }

    return (
        <SysolovPopup
            open={open}
            onClose={()=>onClose()}
            title={'Edit category'}
        >
            <div style={{display:'flex', flexDirection:'column', gap:'1em'}}>
                <TextField
                    label="Category Name"
                    variant="standard"
                    value={category.name}
                    onChange={(e) => setCategory(prev=>({...prev, name:e.target.value}))}
                />
                <div style={{display:'flex', justifyContent: 'center'}}>
                    <Button
                        color={'primary'}
                        variant={'contained'}
                        onClick={()=>onEditClick()}

                    >
                        Edit
                    </Button>
                </div>
            </div>
        </SysolovPopup>
    );
};

export default EditCategoryPopup;