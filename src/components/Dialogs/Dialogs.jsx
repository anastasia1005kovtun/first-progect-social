import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import MessagesItem from "./Message/Message";

const Dialogs = (props) => {


    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.state.messages.map(m => <MessagesItem me={m.me} message={m.messageText}/>)
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