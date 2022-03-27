import React from "react";
import Post from "./Posts/Post";
import s from "./MyPosts.module.css"


const MyPosts = (props) => {

    let postsElement = props.posts.map( p => {
        return <Post posts={p.posts} likeCounts={p.likeCounts}/>
    })

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
                <div className={s.posts}>
                    {postsElement}
                </div>
            </div>
        </div>
    )
}

export default MyPosts