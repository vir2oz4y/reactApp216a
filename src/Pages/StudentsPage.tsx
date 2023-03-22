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
                    fio={'Жукова Елизавета'}
                    description={'Middle fullstack developer'}
                    imageSrc={'https://sun9-28.userapi.com/impg/SXDzYTqYau0wEKy0Ja5PMKLT0_BDVqP0TYIcIA/LFUACMoSC0g.jpg?size=1350x1920&quality=95&sign=a67ceeaf0c0b8ef962445928192c35b1&type=album'}
                    navigateTo={'/Zhukovaliza'}
                />

            </Stack>
        </div>

    );
};

export default StudentsPage;