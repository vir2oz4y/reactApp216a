import {Button, TextField} from '@mui/material';
import React, {useState} from 'react';
import SysolovPopup, {IPopup} from "../../../../../Components/Sysolov/SysolovPopup/SysolovPopup";
import {Category} from "../Models";

type Props = IPopup & {
    onCreate:(category:Category) => void;
}

const CreateCategoryPopup = ({open, onClose, onCreate}:Props) => {

    const [categoryName, setCategoryName] = useState('')

    const onCreateClick =()=>
    {
        onCreate({
            id:Math.random(),
            name:categoryName
        })
        onClose()
    }

    return (
        <SysolovPopup
            open={open}
            onClose={()=>onClose()}
            title={'Create category'}
        >
            <div style={{display:'flex', flexDirection:'column', gap:'1em'}}>
                <TextField
                    label="Category Name"
                    variant="standard"
                    value={categoryName}
                    onChange={(e)=>setCategoryName(e.target.value)}
                />
                <div style={{display:'flex', justifyContent: 'center'}}>
                    <Button
                        color={'primary'}
                        variant={'contained'}
                        onClick={()=>onCreateClick()}

                    >
                        Create
                    </Button>
                </div>
            </div>
        </SysolovPopup>
    );
};

export default CreateCategoryPopup;