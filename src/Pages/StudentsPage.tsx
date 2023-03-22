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
                    fio={'Снегирева Полина Юрьевна'}
                    description={'Второе высшее'}
                    imageSrc={'https://sun1-98.userapi.com/s/v1/ig2/MMe8ELnbRCSklHff-aYvv493uygcJsljxahfAnKZRuq7hhSi67V5HEdHXrY5Kk_dGTG5ULx_4s6pWrwxqbGAyDKx.jpg?size=400x400&quality=95&crop=0,463,718,718&ava=1'}
                    navigateTo={'/SnegirevaPolina'}
                />
            </Stack>
        </div>
    )
}

export default StudentsPage;