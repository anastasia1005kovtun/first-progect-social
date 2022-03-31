import React from "react";
import Post from "./Posts/Post";
import s from "./MyPosts.module.css"


const MyPosts = (props) => {

    let postsElement = props.posts.map( p => <Post posts={p.posts} likeCounts={p.likeCounts}/>)

    let newPostElement = React.createRef()

    let addPost = () => {
        props.dispatch({type: 'ADD-POST'})
    }
    let onPostChange = () =>{
        let text = newPostElement.current.value
        let action = {type: 'UPDATE-NEW-POST-TEXT', text: text };
        props.dispatch(action)
    }
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