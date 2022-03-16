import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";


const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src={'http://www.teleenergia.ch/telegestione/assets/img/demo/7.jpg'}
                    alt=""/>
            </div>
            <div>
                ava+description
            </div>
            <div>
                <MyPosts/>
            </div>
        </div>

    )
}

export default Profile