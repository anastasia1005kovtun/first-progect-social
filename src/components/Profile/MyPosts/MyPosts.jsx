import React from "react";
import Post from "./Posts/Post";
import s from "./MyPosts.module.css"
import {addPostActionCreator, onPostChangeActionCreator} from "../../../redux/store";


const MyPosts = (props) => {

    let postsElement = props.posts.map( p => <Post posts={p.posts} likeCounts={p.likeCounts}/>)

    let newPostElement = React.createRef()

    let addPost = () => {
        props.dispatch(addPostActionCreator())}

    let onPostChange = () =>{
        let text = newPostElement.current.value
        props.dispatch(onPostChangeActionCreator(text))}
    return (
        <div className={s.postsBlock}>
            <h3>My posts </h3>
            <div>
                <div>
                    <textarea
                        onChange={onPostChange}
                        ref={newPostElement}
                        value={props.newPostText}
                    />
                </div>
                <div>
                    <button
                        onClick={addPost}
                    >
                        Add post</button>
                </div>
                <div className={s.posts}>
                    {postsElement}
                </div>
            </div>
        </div>
    )
}

export default MyPosts