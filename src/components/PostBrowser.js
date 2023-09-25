import { Button, Card, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import CreatePost from "./CreatePost";
import PostCard from "./PostCard";
import SortBySelect from "./SortBySelect";
import HorizontalStack from "./util/HorizontalStack";

const PostBrowser = (props) => {
  // Static post data for demonstration
  const staticPosts = [
    { _id: "1", content: "Static post 1", likes: 5, comments: 2 },
    { _id: "2", content: "Static post 2", likes: 8, comments: 4 }
  ];

  const [posts, setPosts] = useState(staticPosts);

  const removePost = (removedPost) => {
    setPosts(posts.filter((post) => post._id !== removedPost._id));
  };

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Keep the sorting functionality for demonstration purposes
  const contentTypeSorts = {
    posts: {
      "-createdAt": "Latest",
      "-likeCount": "Likes",
      "-commentCount": "Comments",
      createdAt: "Earliest",
    },
    liked: {
      "-createdAt": "Latest",
      createdAt: "Earliest",
    },
  };

  const sorts = contentTypeSorts[props.contentType];

  return (
    <>
      <Stack spacing={2}>
        <Card>
          <HorizontalStack justifyContent="space-between">
            {props.createPost && <CreatePost />}
            <SortBySelect
              onSortBy={(e) => {}}  // Placeholder function
              sortBy={"-createdAt"} // Default static value
              sorts={sorts}
            />
          </HorizontalStack>
        </Card>

        {posts.map((post, i) => (
          <PostCard
            preview="primary"
            key={post._id}
            post={post}
            removePost={removePost}
          />
        ))}

        <Stack py={5} alignItems="center">
          <Typography variant="h5" color="text.secondary" gutterBottom>
            {posts.length > 0 ? (
              <>All posts have been viewed</>
            ) : (
              <>No posts available</>
            )}
          </Typography>
          <Button variant="text" size="small" onClick={handleBackToTop}>
            Back to top
          </Button>
        </Stack>
      </Stack>
    </>
  );
};

export default PostBrowser;
