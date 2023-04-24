import React from 'react';
import {Modal} from "@mui/material";
import "./ZhukovaPopup.scss";

export type IPopup={
    open:boolean,
    onClose:()=>void;
}
type Props=IPopup &{
    children:any,
    title:string;

}
const ZhukovaPopup = ({open,onClose,children,title}:Props) => {
    return (
        <Modal
            open={open}
            onClose={onClose}
        >
            <div className={'zhukova_popup'}>
                <div className={'zhukova_popup_content'}>
                    <div className={'zhukova_popup_content_title'}>
                        <div>
                            {title}
                        </div>
                        <div>
                            <button onClick={()=>onClose()}
                            >
                                Закрыть

                            </button>
                        </div>


                    </div>
                    <div className={'zhukova_popup_content_body'}>
                        {children}

                    </div>
                </div>

            </div>
        </Modal>
    );
};

export default ZhukovaPopup;