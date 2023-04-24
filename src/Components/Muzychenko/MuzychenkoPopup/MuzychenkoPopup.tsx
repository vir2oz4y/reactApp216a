import React from 'react';
import {Button, Modal} from "@mui/material";
import "./MuzychenkoPopup.scss";

export type IPopup = {
    open:boolean,
    onClose:()=>void;
}

type Props = IPopup & {
    children:any,
    title:string
}

const MuzychenkoPopup = ({open, onClose, children, title}:Props) => {
    return (
        <Modal
            open={open}
            onClose={onClose}
        >
            <div className={'muzychenko_popup'}>
                <div className={'muzychenko_popup__content'}>
                    <div className={'muzychenko_popup__content__title'}>
                        <div>
                            {title}
                        </div>

                        <div>
                            <Button onClick={()=>onClose()}>
                                Закрыть
                            </Button>
                        </div>
                    </div>
                    <div className={'muzychenko_popup__content__body'}>
                        {children}
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default MuzychenkoPopup;