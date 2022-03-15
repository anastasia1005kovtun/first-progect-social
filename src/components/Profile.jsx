import React from "react";
import s from './Profile.module.css'

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
                my posts
                <div>
                    new post
                </div>
            </div>
            <div className={s.posts}>

                {/*Ми не используем в названия дефис */}
                {/*<div className={s.posts-id}>*/}
                {/*Как добавтить два класа */}
                {/*<div className={$'{s.posts} ${s.active}'}>*/}
                <div className={s.item}>post1</div>
                <div className={s.item}>post2</div>
            </div>
        </div>

    )
}

export default Profile