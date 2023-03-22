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
                    fio={'سيسولوف نيكيتا سيرجيفيتش'}
                    description={'🐵'}
                    imageSrc={'https://sun9-51.userapi.com/impg/hPye9IcdTqZhMPooq2Fg-_-iPtPfpROLpvo7WQ/D_593QgIme8.jpg?size=960x1280&quality=95&sign=b272567851b9e8f80c9bb2e402208d5d&type=album'}
                    navigateTo={'/SysolovNikita'}
                />

            </Stack>
        </div>

    );
};

export default StudentsPage;