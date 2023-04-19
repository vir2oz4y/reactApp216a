import React, {useState} from 'react';
import {DataGrid, GridColDef} from "@mui/x-data-grid";
import {Category} from "./models";
import {Button, IconButton} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import KryuchkovPopup from "../../../../Components/Kryuchkov/KryuchkovPopup/KryuchkovPopup";
import CreateCategoryPopup from "./Popups/CreateCategoryPopup";


const KryuchkovCategoryPage = () => {

    const [categoryList, setCategoryList] = useState<Category[]>([
        {
            id: 1,
            name: 'Категория 1'
        },
        {
            id: 2,
            name: 'Категория 2'
        },
    ])

    const columns: GridColDef[] = [
        {
            field: 'id',
            headerName: 'ID'
        },
        {
            field: 'name',
            headerName: 'Название'
        },
        {
            field: '',
            headerName: '',
            renderCell: (e: any) => {
                return <div>
                    <IconButton
                        aria-label="delete"
                        onClick={()=>onDeleteClick(e.row.id)}
                    >
                        <DeleteIcon/>
                    </IconButton>

                    <IconButton aria-label="edit">
                        <EditIcon/>
                    </IconButton>
                </div>
            }
        }
    ]

    const onDeleteClick = (id:number) =>{
        setCategoryList(prev=>
            prev.filter(el=>el.id !== id)
        )
    }

    const [createPopupOpened, setCreatePopupOpened] = useState(false)

    return (
        <div style={{width: '100%'}}>

            {createPopupOpened && <CreateCategoryPopup
                open={createPopupOpened}
                onClose={()=>setCreatePopupOpened(false)}
            />}

            <div style={{display: 'flex', justifyContent: 'space-between'}}>
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

export default KryuchkovCategoryPage;