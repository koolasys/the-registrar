import React, {useState, useEffect} from "react";
import Form from "./Form";
import Bar from "./AppBar";
import { v4 as uuid } from "uuid";


const View =(props)=>{

    //Saving data to local storeage
    const LOCAL_STORAGE_KEY = "Posts";

    const [postsList, setPosts] = useState([]);
    const [showModal, setModal] = useState(false);

    //Takes the props to to the parent
    const addPostHandler =(post)=>
        {
            setPosts([...postsList, {id: uuid(), ...post}]);
        };

    const handleShowModalClick =()=>
    {
        console.log("I AM PRESSED");
        setModal((showModal)=>!showModal);
    }

    //for retrieval on reload
    useEffect(()=>
        {
            const retrievePosts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
            if(retrievePosts) setPosts(retrievePosts); 
        },[]);
    //now we save the data to local storage
    useEffect(()=>
    {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(postsList)); 
    },[postsList]);
   
        return(
            <div className="time-line">
                <Bar counts={postsList}/>
                <section className="container">
                    <Post posts={postsList}/>
                </section>
                <Form addPostHandler={addPostHandler} showModal={showModal} onClick={handleShowModalClick}/>
                <AddButton onClick={handleShowModalClick}/> {/*click={handleShowModalClick}/>*/}
            </div>
        );
    
}

const Post =(props)=>
{
    //console.log(props.posts[0]);

    const renderPostsList = props.posts.map((post)=>
    {
        //console.log(post);
        const {alias, message, timeLog} = post;
        //let id = post.id;
        //console.log(id);
        //console.log("I AM SO"+post.id);

    return(
            <div className="post-container" key={post.id}>
                <h2>{alias}</h2>
                <p>{message}</p>
                <span>{timeLog}</span>
            </div>
    );
    });

    return(
        <div id="list-of-posts">{renderPostsList}</div>
    );
}

const AddButton =(props)=> 
{
    return(
        <button className="floating-button" id="add-button" onClick={()=>props.onClick()}>+</button>
        );
}

export default View;