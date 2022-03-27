import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import MessagesItem from "./Message/Message";

const Dialogs = (props) => {
    //<Dialogs d={?} m={?} />
    //props: { d: {}, m:{}}


    let dialogsElements = props.d.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.m.map(m => <MessagesItem message={m.messageText}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )

}

export default Dialogs