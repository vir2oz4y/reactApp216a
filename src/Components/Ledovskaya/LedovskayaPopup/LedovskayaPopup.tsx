import {Button, Modal} from '@mui/material';
import React from 'react';
import "./LedovskayaPopup.scss"

export type IPopup = {
    open: boolean,
    onClose:()=>void;
}
type Props = IPopup & {
    children:any
    title:string
}

const LedovskayaPopup = ({open,onClose,children}:Props) => {
    return (
        <Modal
            open = {open}
            onClose={onClose}
        >
            <div className={'ledovskaya_popup'}>
                <div className={'ledovskaya_popup__content'}>
                    <div className={'ledovskaya_popup__content__title'}>
                        <div>
                            Заголовок
                        </div>

                        <div>
                            <Button>
                                Закрыть
                            </Button>
                        </div>
                    </div>

                    <div className={'ledovskaya_popup__content__body'}>
                        {children}
                    </div>
                </div>

            </div>
        </Modal>
    );
};

export default LedovskayaPopup;