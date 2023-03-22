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
                    fio={'Титовец Виктория Алексеевна'}
                    description={'大学生'}
                    imageSrc={'https://www.meme-arsenal.com/memes/64c01ec8beb7fe78dc45f53eabb5f323.jpg'} //ttps://www.meme-arsenal.com/memes/64c01ec8beb7fe78dc45f53eabb5f323.jpg
                    navigateTo={'/vik'}
                />

            </Stack>
        </div>

    );
};

export default StudentsPage;