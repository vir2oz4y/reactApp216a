import {Button, Modal} from '@mui/material';
import React from 'react';
import "./SysolovPopup.scss";

export type IPopup = {
    open:boolean,
    onClose:()=>void;
}

type Props = IPopup & {
    children:any,
    title:string;
}

const SysolovPopup = ({open, onClose, children, title}:Props) => {
    return (
        <Modal
            open={open}
            onClose={onClose}
        >
            <div className={'sysolov_popup'}>
                <div className={'sysolov_popup_content'}>
                    <div className={'sysolov_popup_content_title'}>
                        <div>
                            {title}
                        </div>

                        <div>
                            <button>
                                <Button onClick={()=>onClose()}>
                                    Close
                                </Button>
                            </button>
                        </div>
                    </div>

                    <div className={'sysolov_popup_content_body'}>
                        {children}
                    </div>
                </div>
            </div>

        </Modal>
    );
};

export default SysolovPopup;