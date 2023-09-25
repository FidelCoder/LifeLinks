import { Container, Stack } from "@mui/material";
import React, { useState } from "react";
import GoBack from "../GoBack";
import GridLayout from "../GridLayout";
import Loading from "../Loading";
import Navbar from "../Navbar";
import PostCard from "../PostCard";
import Sidebar from "../Sidebar";
import { useParams } from "react-router-dom";
import Comments from "../Comments";
import ErrorAlert from "../ErrorAlert";

const PostView = () => {
  const params = useParams();

  const [post, setPost] = useState(null);  // You might need to adjust this or provide dummy data
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  // Note: Removed the fetchPost function since it had the API call.

  return (
    <Container>
      <Navbar />
      <GoBack />
      <GridLayout
        left={
          loading ? (
            <Loading />
          ) : post ? (
            <Stack spacing={2}>
              <PostCard post={post} key={post._id} />

              <Comments />
            </Stack>
          ) : (
            error && <ErrorAlert error={error} />
          )
        }
        right={<Sidebar />}
      />
    </Container>
  );
};

export default PostView;
