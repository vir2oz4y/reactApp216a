import React, {useState} from 'react';
import BaidinaPopup, {IProps} from "../../../../../Components/Baidina/BaidinaPopup/BaidinaPopup";
import {Button, FormControl, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import {Tovari} from "../../Tovari/Models";
import {Kategori} from "../../Kategori/Models";
import {Postavshiki} from "../../Postavshiki/Models";

type Props = IProps & {
onCreate:(newTovari:Tovari)=>void;
}
const CreateTovariPopup = ({open,onClose, onCreate}:Props) => {
    const createTovari = () => {
                onCreate(Tovari)
    }
    const [tovariName,setTovariName]=useState('')
    const [kategoriList, setKategoriList] = useState<Kategori[]>([])

    const [postavshikiList, setPostavshikiList] = useState<Postavshiki[]>([])

    const [Tovari, setTovari] = useState<Tovari>({
        kategoriId: 0,
        kategoriName: "",
        cost: 0,
        description: "",
        id: 0,
        postavshikId: 0,
        postavshikName: "",
        name: ""
    })
    const onCreateClick = () => {
        createTovari();

        onClose();
    }
    console.log(Tovari)
    return (

        <BaidinaPopup
            open={open}
            onClose={() => onClose()}
            title={'Создание товара'}
        >
            <div>
                <TextField
                    label="Название товара"
                    variant="filled"
                    onChange={(e)=>setTovariName(e.target.value)}
                />
                <div style={{display: "flex", justifyContent: 'center'}}>
                    <TextField
                        label="Название"
                        variant="standard"
                        fullWidth={true}
                        value={Tovari.name}
                        onChange={e => setTovari(prev => ({...prev, name: e.target.value}))}
                    />

                    <TextField
                        label="Описание"
                        variant="standard"
                        fullWidth={true}
                        value={Tovari.description}
                        onChange={e => setTovari(prev => ({...prev, description: e.target.value}))}
                    />


                    <TextField
                        label="Цена"
                        variant="standard"
                        fullWidth={true}
                        value={Tovari.cost}
                        onChange={e => setTovari(prev => ({...prev, cost: e.target.value as any}))}
                    />

                    <FormControl fullWidth>
                        <InputLabel id="category">Категория</InputLabel>
                        <Select
                            labelId="category"
                            value={Tovari.kategoriId?.toString()}
                            label="Категория"
                            onChange={(e) => setTovari(prev => ({...prev, kategoriId: e.target.value as any}))}
                        >
                            {kategoriList.map((el, i) =>
                                <MenuItem value={el.id.toString()}>{el.name}</MenuItem>)
                            }

                        </Select>
                    </FormControl>

                    <FormControl fullWidth>
                        <InputLabel id="postavshik">Поставщик</InputLabel>
                        <Select
                            labelId="postavshik"
                            value={Tovari.postavshikId?.toString()}
                            label="Поставщик"
                            onChange={(e) => setTovari(prev => ({...prev, postavshikId: e.target.value as any}))}
                        >
                            {postavshikiList.map((el, i) =>
                                <MenuItem value={el.id.toString()}>{el.name}</MenuItem>)
                            }

                        </Select>
                    </FormControl>

                    <Button
                        color={'primary'}
                        variant={'contained'}
                        onClick={()=>onCreateClick()}

                    >
                        Создать
                    </Button>
                </div>
            </div>
        </BaidinaPopup>

    );
};

export default CreateTovariPopup;