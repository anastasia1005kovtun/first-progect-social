import React from "react";
import s from "./DialogArea.module.css"

const DialogArea = (props) => {
    // props= {
    // addNewMessage: ()=> void
    // updateNewMessage: (text: string) => void
    // newMessage: string
    // }
    //<DialogArea addNewMessage={function} updateNewMessage={function} newMessage={string}/>

    let textareaElement = React.createRef()
    let sendMessage = () => {
        props.dispatch({type:'ADD-NEW-MESSAGE'})
    }

    let onMessageChange = () =>{
        let text = textareaElement.current.value
        let action = ({type:'UPDATE-NEW-MESSAGE', text: text })
        props.dispatch(action)

    }

    return (
        <div className={s.textArea}>
                    <textarea
                        ref={textareaElement}
                        className={s.enterText}
                        onChange={onMessageChange}
                        value={props.newMessage}
                    />
            <button
                onClick={sendMessage}
                className={s.button}
            >
                Send
            </button>
        </div>
    )

}

export default DialogArea
