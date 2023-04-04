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

                <StudentElement  
                    fio={'Акюз Лейла '}
                    description={'мы сплит'}
                    imageSrc={'https://zooclub.ru/attach/8000/8863.jpg'}
                    navigateTo={'/akyuzleyla'}
                />

                <StudentElement
                    fio={' Бриккер Александр'}
                    description={'мы сплит'}
                    imageSrc={'https://zooclub.ru/attach/8000/8863.jpg'}
                    navigateTo={'/brikkersasha'}
                />

                <StudentElement
                    fio={'Жукова Елизавета'}
                    description={'Middle fullstack developer'}
                    imageSrc={'https://sun9-28.userapi.com/impg/SXDzYTqYau0wEKy0Ja5PMKLT0_BDVqP0TYIcIA/LFUACMoSC0g.jpg?size=1350x1920&quality=95&sign=a67ceeaf0c0b8ef962445928192c35b1&type=album'}
                    navigateTo={'/Zhukovaliza'}
                 />

                <StudentElement
                    fio={'Байдина Елена Михайловна'}
                    description={'Like to eat delicious'}
                    imageSrc={'https://slovnet.ru/wp-content/uploads/2018/08/3-59.jpg'}
                    navigateTo={'/Baidina Elena'}
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