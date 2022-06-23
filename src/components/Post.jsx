import React from "react";
import "../styles/main.css";

const Post =(props)=>
{

    const renderPostsList = props.posts.map((post)=>{
        const {alias, message, timeLog} = post;

    return(
        <div className="post-container">
            <h2>{alias}</h2>
            <p>{message}</p>
            <span>{timeLog}</span>
        </div>
    );
    });

    return(
        <div>{renderPostsList}</div>
    );
}

var PostObject = [
    {
        "name": "Marvin",
        "message": "A bunch of text dsahdashj hjasd jdsnakjn ioiojdas asdhashdjh suidui uhui ahssud uashdasid duiahu h uduaishidausi duh faioduasm 8sduidui iu udioahio d duiadis hioaudiomj iuasimdjasi ijhsdojn niuasjdd.",
        "date": "18/03/2022 16:20"
    }
];

export default Post;