import React from "react";
import s from "./Message.module.css";


type messageType = {
    avatar: string
    name: string
    message: string
    time: string
}
function Message(props: messageType) {
    return (
        <div className={s.message}>
            <div className={s.avatar}><img  src={props.avatar}/></div>
            <div className={s.mContainer}>
            <div className={s.name}>{props.name}</div>
            <div className={s.messageText}>{props.message}</div>
            <div className={s.time}>{props.time}</div>
            </div>
        </div>
    );
}

export default Message;
