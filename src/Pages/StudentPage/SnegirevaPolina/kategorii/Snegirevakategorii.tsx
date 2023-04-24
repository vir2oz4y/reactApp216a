import React, {useState} from 'react';
import {DataGrid, GridColDef} from "@mui/x-data-grid";
import {kategorii} from "./models";
import {Button, IconButton} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SnegirevaPopUp from "../../../../Components/Snegireva/SnegirevaPopUp/SnegirevaPopUp";
import Createkategoriipopup from "./Popups/Createkategoriipopup";
import {Category} from "@mui/icons-material";

const Snegirevakategorii  = () => {
    const [categoryList,setCategoryList ] = useState<kategorii[]>( [
        {
            id: 1,
            name: "Категория1"
        },
        {
            id: 2,
            name: "Категория2"
        }
        ]

    )
    const columns: GridColDef[]= [
        {
            field:"id",
            headerName:"ID"
        },
        {
            field:"name",
            headerName:"Название"
        },
        {
            field:'',
            headerName:'',
            renderCell:(e:any)=>{
                return <div><IconButton aria-label="delete"
                onClick={()=>onDeleteClick(e.row.id)}>
                    <DeleteIcon/>
                </IconButton>
                    <IconButton aria-label="edit">
                        <EditIcon/>
                    </IconButton>
                </div>
            }
        }
    ]
    const onDeleteClick = (id:number)=>{
        setCategoryList( prev=>
        prev.filter(el=>el.id !== id)
        )
    }
    const onCreate = (category:kategorii)=>{
        setCategoryList(prev=>[category, ...prev]);
    }
    const onEdit=(category:kategorii)=>{
        setCategoryList(prev=>{
            const current = prev.find(el=>el.id===category.id);
            if (current)
                current.name=category.name;

            return[...prev];
        })
    }
    const [CreatePopUpOpen,SetCreatePopUpOpen ]=useState(false)
    const[editedCategory,setEditedCategory]=
    useState<kategorii|null>(null)
    return (
        <div style={{width:"100%"}}>
            {CreatePopUpOpen && <Createkategoriipopup
            open={CreatePopUpOpen}
            onClose={()=>SetCreatePopUpOpen(false)}
            onCreate={(newCategory)=>onCreate(newCategory)}/>
            }

            {CreatePopUpOpen && <EditCategoryPopup
            open={CreatePopUpOpen}
            onClose={()=>setCreatePopupOpened(false)}
            category={editedCategory}
                onEdit={(newCategory:kategorii)=>onEdit(newCategory)}
                />}
            {editedCategory!== null && <EditCategoryPopup
                open={{editedCategory !== null}
            onClose={()=>setEditedCategory(null)}
            category={editedCategory}
                    onEdit={(newCategory:kategorii)=>onEdit(newCategory)}
                    />}

            <div style={{display: "flex", justifyContent: "space-between"}}>
                <h1>Категории</h1>
            </div>
            <Button
                color={'primary'}
                variant={'contained'}
                onClick={()=>SetCreatePopUpOpen(true)}>

            </Button>
            <div style={{width:"100%", height:"70vh"}}>
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

export default Snegirevakategorii;