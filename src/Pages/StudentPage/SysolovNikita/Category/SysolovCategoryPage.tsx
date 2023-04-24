import React, {useState} from 'react';
import {DataGrid, GridColDef} from "@mui/x-data-grid";
import {Category} from "./Models";
import {Button, IconButton} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SysolovPopup from "../../../../Components/Sysolov/SysolovPopup/SysolovPopup";
import CreateCategoryPopup from "./Popups/CreateCategoryPopup";
import EditCategoryPopup from './Popups/EditCategoryPopup';

const SysolovCategoryPage = () => {

    const [categoryList, setCategoryList] = useState<Category[]>([
        {
            id:1,
            name:'Category 1'
        },
        {
            id:2,
            name:'Category 2'
        }
    ])

    const columns :GridColDef[]= [
        {
            field:'id',
            headerName:'ID'
        },
        {
            field:'name',
            headerName:'Name'
        },
        {
            field:'',
            headerName:'',
            renderCell:(e:any)=>{
                return<div>
                    <IconButton
                        aria-label="delete"
                        onClick={()=>onDeleteClick(e.row.id)}>
                    <DeleteIcon />
                    </IconButton>

                    <IconButton aria-label="edit" onClick={()=>setEditedCategory(e.row)}>
                        <EditIcon />
                    </IconButton>
                </div>
            }
        }
    ]

    const onDeleteClick = (id:number) =>{
        setCategoryList(prev=>prev.filter(el=>el.id !== id))
    }

    const onCreate = (category:Category) => {
        setCategoryList(prev=>[category, ...prev]);
    }

    const onEdit = (category:Category) => {
        setCategoryList(prev=>{

            const current = prev.find(el=>el.id === category.id);

            if (current)
                current.name = category.name;

            return[...prev];})
    }

    const [createPopupOpened, setCreatePopupOpened] = useState(false)
    const[editedCategory, setEditedCategory] = useState<Category|null>(null)

    return (
        <div style={{width:'100%'}}>

            {createPopupOpened && <CreateCategoryPopup
                open ={createPopupOpened}
                onClose={()=>setCreatePopupOpened(false)}
                onCreate={(newCategory)=>onCreate(newCategory)}
                />}

            {editedCategory !== null && <EditCategoryPopup
                open ={editedCategory !== null}
                onClose={()=>setEditedCategory(null)}
                category={editedCategory}
                onEdit={(newCategory)=>onEdit(newCategory)}
            />}

            <div style={{display:"flex", justifyContent:"space-between"}}>
                <h1>Categories</h1>

                <div>
                    <Button
                        color={'primary'}
                        variant={'contained'}
                        onClick={()=>setCreatePopupOpened(true)}
                    >
                        Create new category
                    </Button>
                </div>
            </div>

            <div style={{width:'100%', height:'70vh'}}>

                <DataGrid
                    rows={categoryList}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 5,
                            },
                        },
                    }}
                    pageSizeOptions={[5]}
                    checkboxSelection
                    disableRowSelectionOnClick
                />
            </div>
        </div>
    );
};

export default SysolovCategoryPage;