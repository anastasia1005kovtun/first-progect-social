import React from "react";
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";
import img from '../../../assets/img/avaDialogs.jpg'

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink className={s.link} to={path}>
                <img className={s.ava} src={img} alt=""/>
                <span>{props.name}</span>
            </NavLink>
        </div>
    )
}


export default DialogItem
