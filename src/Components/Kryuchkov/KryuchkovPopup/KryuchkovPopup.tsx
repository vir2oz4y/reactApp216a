import {Button, Modal} from '@mui/material';
import React from 'react';
import "./KryuchkovPopup.scss";

export type IPopup = {
    open:boolean,
    onClose:()=>void;
}

type Props = IPopup & {
    children:any,
    title:string
}

const KryuchkovPopup = ({open, onClose, children, title}:Props) => {
    return (
        <Modal
            open={open}
            onClose={onClose}
        >
            <div className={'kryuchkov_popup'}>

                <div className={'kryuchkov_popup__content'}>

                    <div className={'kryuchkov_popup__content__title'}>

                        <div>
                            {title}
                        </div>

                        <div>
                            <Button
                                onClick={()=>onClose()}
                            >
                                Закрыть
                            </Button>
                        </div>
                    </div>

                    <div className={'kryuchkov_popup__content__body'}>
                        {children}
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default KryuchkovPopup;