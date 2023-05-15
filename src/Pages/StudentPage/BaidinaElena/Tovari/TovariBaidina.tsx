import React, {useEffect,useState} from 'react';
import {DataGrid, GridColDef} from "@mui/x-data-grid";
import {Tovari} from "./Models";
import {Button, IconButton} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import BaidinaPopup from "../../../../Components/Baidina/BaidinaPopup/BaidinaPopup";
import CreateTovariPopup from "./Popups/CreateTovariPopup";
import createTovariPopup from "./Popups/CreateTovariPopup";
import EditTovariPopup from "./Popups/EditTovariPopup";

const TovariBaidina = () => {

    const [TovariList, setTovariList] = useState<Tovari[]>([])

    const columns: GridColDef[] = [
        {
            field: 'id',
            headerName: 'Id'
        },
        {
            field: 'name',
            headerName: 'Название',
            flex: 1
        },
        {
            field: 'cost',
            headerName: 'Цена',
            flex: 1
        },
        {
            field: 'kategoriName',
            headerName: 'Категория',
            flex: 1
        },
        {
            field: 'postavshikName',
            headerName: 'Поставщик',
            flex: 1
        },
        {
            field: '',
            headerName: '',
            renderCell:(e:any)=>{
                return <div><IconButton aria-label="delete" onClick={()=>onDeleteClick(e.row.id)}>
                    <DeleteIcon />
                </IconButton>
                    <IconButton aria-label="edit" onClick={()=>setEditTovari(e.row)}>
                        <EditIcon />
                    </IconButton >
                </div>
            }
        }]
    const onDeleteClick=(id:number)=>{
        setTovariList(prey=>
            prey.filter(el=>el.id !==id))
    }
    const onCreate = (newTovari:Tovari)=>{
        setTovariList(prey=>[newTovari, ...prey]);
    }
    const onEdit = (tovari:Tovari)=>{
        setTovariList(prey=>{
            const current=prey.find(el=>el.id===tovari.id);
            if (current)
                current.name=tovari.name;

            return[...prey]
        });
    }

    const [createPopupOpened,setCreatePopupOpened]=useState(false)

    const [editTovari,setEditTovari] = useState<Tovari|null>(null)

    return (

        <div style={{width:'100%'}}>
            {createPopupOpened && <CreateTovariPopup
                open={createPopupOpened}
                onClose={() =>setCreatePopupOpened(false)}
                onCreate={(newTovari)=>onCreate(newTovari)}
            />}

            {editTovari!==null && <EditTovariPopup
                open={editTovari!==null}
                onClose={() =>setEditTovari(null)}
                tovari={editTovari}
                onEdit={(newTovari:Tovari)=>onEdit(newTovari)}
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
                    rows={TovariList}
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

export default TovariBaidina;