import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import MessagesItem from "./Message/MessageItem";
import DialogArea from "./DialogArea/DialogArea";

const Dialogs = (props) => {
    //props = {
    // addNewMessage: function,
    //updateNewMessage: function,
    //store: store.dialogsPage
    // }

    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.state.messages.map(m => <MessagesItem me={m.me} message={m.messageText}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            <DialogArea
                dispatch={props.dispatch}
                newMessage={props.state.newMessage}
            />
            </div>
        </div>
    )

}

export default Dialogs