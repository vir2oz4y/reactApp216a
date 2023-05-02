import React, {useState} from 'react';
import {DataGrid, GridColDef} from "@mui/x-data-grid";
import {Postavshiki} from "./Models";
import {Button, IconButton} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import PostavshikiPopup from "../../../../Components/Baidina/BaidinaPopup/BaidinaPopup";
import CreatePostavshikiPopup from "./Popups/CreatePostavshikiPopup";
import createPostavshikiPopup from "./Popups/CreatePostavshikiPopup";
import EditPostavshikiPopup from "./Popups/EditPostavshikiPopup";

const PostavshikiBaidina = () => {

    const [postavshikiList,setpostavshikiList]=useState<Postavshiki[]>([ {
        id: 1,
        name: 'Поставщик1'
    },
        {
            id: 2,
            name: 'Поставщик2'
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
                    <IconButton aria-label="edit" onClick={()=>setEditPostavshiki(e.row)}>
                        <EditIcon />
                    </IconButton >
                </div>
            }
        }]
    const onDeleteClick=(id:number)=>{
        setpostavshikiList(prey=>
            prey.filter(el=>el.id !==id))
    }
    const onCreate = (newPostavshik:Postavshiki)=>{
        setpostavshikiList(prey=>[newPostavshik, ...prey]);
    }
    const onEdit = (postavshik:Postavshiki)=>{
        setpostavshikiList(prey=>{
            const current=prey.find(el=>el.id===postavshik.id);
            if (current)
                current.name=postavshik.name;

            return[...prey]
        });
    }

    const [createPopupOpened,setCreatePopupOpened]=useState(false)

    const [editPostavshiki,setEditPostavshiki] = useState<Postavshiki|null>(null)

    return (

        <div style={{width:'100%'}}>
            {createPopupOpened && <CreatePostavshikiPopup
                open={createPopupOpened}
                onClose={() =>setCreatePopupOpened(false)}
                onCreate={(newCategory)=>onCreate(newCategory)}
            />}

            {editPostavshiki!==null && <EditPostavshikiPopup
                open={editPostavshiki!==null}
                onClose={() =>setEditPostavshiki(null)}
                postavshik={editPostavshiki}
                onEdit={(newPostavshik:Postavshiki)=>onEdit(newPostavshik)}
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
                    rows={postavshikiList}
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

export default PostavshikiBaidina;