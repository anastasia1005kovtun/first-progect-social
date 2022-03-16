import React from "react";
import s from './MyPosts.module.css'
import Post from "./Posts/Post";


const MyPosts = () => {
    return (
        <div>
            <div>
                My posts
                <div>
                    <textarea></textarea>
                    <button>Add post</button>
                    <Post message={"Hello my name is Nasty"}/>
                    <Post message={"Hi I am Yevhen"}/>

                </div>
            </div>
        </div>
    )
}

export default MyPosts