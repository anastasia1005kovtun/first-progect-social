import React from "react";
import s from './ProfileInfo.module.css';
import imgBg from '../../../assets/img/bgimg.jpg'

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src={imgBg}
                     alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                ava+description
            </div>
        </div>
    )
}

export default ProfileInfo