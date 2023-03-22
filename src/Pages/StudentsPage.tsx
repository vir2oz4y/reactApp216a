import React from 'react';
import StudentElement from "../Components/StudentElement/StudentElement";
import {Stack} from "@mui/material";
import Header from "../Components/Header/Header";

const StudentsPage = () => {

    return (
        <div>
            <Header/>
            <Stack direction="row" spacing={2} padding={'1em'}>

                <StudentElement
                    fio={'Крючков Николай Алексеевич'}
                    description={'Middle fullstack developer'}
                    imageSrc={'https://sky.pro/media/wp-content/uploads/2022/03/glavnaya-9-1.png'}
                    navigateTo={'/teacher'}
                />

                <StudentElement
                    fio={'Музыченко Анастасия Сергеевна'}
                    description={'Бакалавр'}
                    imageSrc={'https://media.istockphoto.com/id/172772174/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%82%D0%BE%D0%B3%D0%B0.jpg?s=1024x1024&w=is&k=20&c=hfb_ZBfz9rv_TzRL6tBsXQXjdA33b58X_zFh1DTCHWo='}
                    navigateTo={'/MuzychenkoStacy'}
                />

            </Stack>
        </div>

    );
};

export default StudentsPage;