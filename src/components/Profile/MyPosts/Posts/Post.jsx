import React from "react";
import s from './Post.module.css'


const Post = (props) => {
    //props.posts
    //props.likeCounts

    return (
        <div className={s.postsItem}>
            <div className={s.item}>
                <img src="https://o.vdoc.vn/data/image/2021/08/17/Anh-vit-cute-12.jpg" alt=""/>
                <div className={s.pPost}><p>{props.posts}</p></div>
                <button>
                    Like
                    {props.likeCounts}
                </button>
            </div>

        </div>
    )
}

// const Like = (props) => {
//     return (
//         <div>
//             <button>
//                 {props.like}
//             </button>
//         </div>
//     )
//
// }
export default Post