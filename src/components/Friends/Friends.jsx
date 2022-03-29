import React from "react";
import s from "./Friends.module.css";
import Friend from "./Friend/Friend";
import PropTypes from 'prop-types';


const Friends = (props) => { //props =  { frieds: [??]}s
    let friendsElements = props.friends.map(f => <Friend name={f.name} id={f.id}/>)
    return (
        <div className={s.friends}>
            {friendsElements}
        </div>
    )
}

Friends.propTypes = {
    friends: PropTypes.array
}

export default Friends

/**
 * Створити компоненту Playlist
 * Створити state з таким виглядом
 * let state = {
 *     mainPage: {
 *         title: string,
 *         description: string
 *     }
 *     musics = [
 *         {
 *             duration: number;
 *             name: string,
 *             author: string,
 *             rate: number
 *             description: string
 *         },
 *         {..}
 *     ]
 * }
 * В Компоненту Playlist передати пропси типу state
 * В Компоненті Playlist створити Компоненту MainInfo яка приймає пропси типу mainPage і повертає JSX <h1>{title}</h1><h2>{description}</h2>
 * Створити компоненту Music яка приймає пропси musics конкретного обєкта в масиві і повертає JSX
 *
 *
 * */