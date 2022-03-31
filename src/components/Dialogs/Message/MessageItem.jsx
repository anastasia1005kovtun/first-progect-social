import React from "react";
import s from './../Dialogs.module.css';
import avaMessages from '../../../assets/img/avaMesage1.jpg'

const MessagesItem = (props) => { // props: {message: string, id: number, me: boolean}

    return (
        <div className={props.me ? s.messageMe: s.message}>
            <div >
                <img className={s.avaMessage} src={avaMessages} alt=""/>
            </div>
            <p> {props.message}</p>
        </div>
    )
}

export default MessagesItem