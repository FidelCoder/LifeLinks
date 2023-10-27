import React, { useState, useEffect } from "react";
import Post from "../post/Post";
import "./posts.scss";

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch("http://localhost:5000/postlist");
                const data = await response.json();
                console.log("Fetched posts:", data); // Inspect the fetched data
                setPosts(data);
            } catch (error) {
                console.error("Failed to fetch posts:", error);
            }
        };
        fetchPosts();
    }, []);

    return (
        <div className="posts">
            {posts.map((post) => (
                <Post post={post} key={post._id}/>  // _id is the default ID field for MongoDB
            ))}
        </div>
    );
};

export default Posts;
