import React from 'react';
import {Button, Modal} from "@mui/material";
import './BaidinaPopup.scss';
export type IProps ={
    open:boolean,
    onClose:()=>void;
}
type Props = IProps & {
    children:any,
    title:string
}
const BaidinaPopup = ({open,onClose,children,title}:Props) => {
    return (
        <Modal
            open={true}
            onClose={()=>{}}

        >
            <div className={'baidina_popup'}>
                <div className={'baidina_popup_content'}>
                    <div className={'baidina_popup_content_title'}>
                        <div>
                            {title}
                        </div>
                        <div>
                            <Button onClick={()=>onClose()}>
                                Закрыть
                            </Button>
                        </div>
                    </div>
                    <div className={'baidina_popup_content_body'}>
                        {children}
                    </div>

                </div>
            </div>

        </Modal>
    );
};

export default BaidinaPopup;