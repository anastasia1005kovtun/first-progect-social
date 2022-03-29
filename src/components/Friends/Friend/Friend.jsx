import React from "react";
import img from '../../../assets/img/avaMesage1.jpg'
import s from "./Friend.module.css"
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

const Friend = (props) => { // props = {id: number, name: string}
    let path = '/friends' + props.id
    return (
        <div className={s.friend + ' ' + s.active}>
            <Link className={s.link} to={path}>
                <img className={s.ava} src={img} alt=""/>
                <span className={s.name}>{props.name}</span>
            </Link>
        </div>
    )
}
Friend.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string
}

export default Friend
