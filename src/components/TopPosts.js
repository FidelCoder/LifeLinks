import { Card, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import PostCard from "./PostCard";
import HorizontalStack from "./util/HorizontalStack";
import { MdLeaderboard } from "react-icons/md";

const TopPosts = () => {
  // Static posts data
  const posts = [
    {
      _id: 1,
      title: "Static Post 1",
      content: "This is a static post content 1",
      likeCount: 100
    },
    {
      _id: 2,
      title: "Static Post 2",
      content: "This is a static post content 2",
      likeCount: 80
    },
    {
      _id: 3,
      title: "Static Post 3",
      content: "This is a static post content 3",
      likeCount: 60
    }
  ];

  return (
    <Stack spacing={2}>
      <Card>
        <HorizontalStack>
          <MdLeaderboard />
          <Typography>Top Posts</Typography>
        </HorizontalStack>
      </Card>
      {posts && posts.map((post) => (
        <PostCard preview="secondary" post={post} key={post._id} />
      ))}
    </Stack>
  );
};

export default TopPosts;
