import React from "react";
import s from './Post.module.css'


const Post = (props) => {
    return (
        <div>
            <div className={s.item}>
                <img src="https://www.kindpng.com/picc/m/21-218808_cool-avatar-png-picture-cool-pics-for-avatar.png" alt=""/>
                {props.message}
            </div>
            <Like like={"15 Likes"}/>
        </div>
    )
}

const Like = (props) => {
    return (
        <div>
            <button>
                {props.like}
            </button>
        </div>
    )

}
export default Post