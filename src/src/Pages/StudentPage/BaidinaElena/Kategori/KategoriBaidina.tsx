import React, {useState} from 'react';
import {DataGrid, GridColDef} from "@mui/x-data-grid";
import {Kategori} from "./Models";
import {Button, IconButton} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import BaidinaPopup from "../../../../Components/Baidina/BaidinaPopup/BaidinaPopup";
import CreateCategoriPopup from "./Popups/CreateCategoriPopup";
import createCategoriPopup from "./Popups/CreateCategoriPopup";
import EditCategoryPopup from "./Popups/EditCategoryPopup";

const KategoriBaidina = () => {

    const [categoryList,setcategoryList]=useState<Kategori[]>([ {
        id: 1,
        name: 'Категория1'
    },
        {
            id: 2,
            name: 'Категория2'
        }])
    const columns: GridColDef[] = [
        {
        field: "id",
        headerName: 'ID'
        },
        {
            field: "name",
            headerName: 'Название'
        },
        {
            field: '',
            headerName: '',
            renderCell:(e:any)=>{
                return <div><IconButton aria-label="delete" onClick={()=>onDeleteClick(e.row.id)}>
                    <DeleteIcon />
                </IconButton>
                    <IconButton aria-label="edit" onClick={()=>setEditCategory(e.row)}>
                        <EditIcon />
                    </IconButton >
                </div>
            }
        }]
    const onDeleteClick=(id:number)=>{
        setcategoryList(prey=>
        prey.filter(el=>el.id !==id))
    }
    const onCreate = (newCategory:Kategori)=>{
        setcategoryList(prey=>[newCategory, ...prey]);
    }
    const onEdit = (category:Kategori)=>{
        setcategoryList(prey=>{
            const current=prey.find(el=>el.id===category.id);
            if (current)
                current.name=category.name;

            return[...prey]
        });
    }

    const [createPopupOpened,setCreatePopupOpened]=useState(false)

    const [editCategory,setEditCategory] = useState<Kategori|null>(null)

    return (

        <div style={{width:'100%'}}>
            {createPopupOpened && <CreateCategoriPopup
            open={createPopupOpened}
            onClose={() =>setCreatePopupOpened(false)}
            onCreate={(newCategory)=>onCreate(newCategory)}
            />}

            {editCategory!==null && <EditCategoryPopup
                open={editCategory!==null}
                onClose={() =>setEditCategory(null)}
                category={editCategory}
                onEdit={(newCategory:Kategori)=>onEdit(newCategory)}
            />}
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <h1>Категории</h1>
                <div>
                    <Button
                    color={'primary'}
                    variant={'contained'}
                    onClick={()=>setCreatePopupOpened(true)}
                    >
                        Создать новую категорию
                    </Button>
                </div>
            </div>
            <div style={{width: '100%', height: '70vh'}}>
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

export default KategoriBaidina;