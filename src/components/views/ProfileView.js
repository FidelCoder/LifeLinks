import { Card, Container, Stack, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CommentBrowser from "../CommentBrowser";
import ErrorAlert from "../ErrorAlert";
import FindUsers from "../FindUsers";
import Footer from "../Footer";
import GoBack from "../GoBack";
import GridLayout from "../GridLayout";
import MobileProfile from "../MobileProfile";
import Navbar from "../Navbar";
import PostBrowser from "../PostBrowser";
import Profile from "../Profile";
import ProfileTabs from "../ProfileTabs";

const ProfileView = () => {
  const [profile, setProfile] = useState({
    user: {
      id: "12345",
      username: "StaticUser",
      biography: "This is a static biography for demonstration purposes.",
      posts: [],
      liked: [],
      comments: []
    },
  });
  const [editing, setEditing] = useState(false);
  const [tab, setTab] = useState("posts");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const content = e.target.content.value;
    setProfile({ ...profile, user: { ...profile.user, biography: content } });
    setEditing(false);
  };

  const handleEditing = () => {
    setEditing(!editing);
  };

  const handleMessage = () => {
    navigate("/messenger", { state: { user: profile.user } });
  };

  const validate = (content) => {
    let error = "";
    if (content.length > 250) {
      error = "Bio cannot be longer than 250 characters";
    }
    return error;
  };

  const tabs = {
    posts: <PostBrowser profileUser={profile.user} contentType="posts" key="posts" />,
    liked: <PostBrowser profileUser={profile.user} contentType="liked" key="liked" />,
    comments: <CommentBrowser profileUser={profile.user} />,
  };

  return (
    <Container>
      <Navbar />
      <GridLayout
        left={
          <>
            <MobileProfile
              profile={profile}
              editing={editing}
              handleSubmit={handleSubmit}
              handleEditing={handleEditing}
              handleMessage={handleMessage}
              validate={validate}
            />
            <Stack spacing={2}>
              <>
                <ProfileTabs tab={tab} setTab={setTab} />
                {tabs[tab]}
              </>
              {error && <ErrorAlert error={error} />}
            </Stack>
          </>
        }
        right={
          <Stack spacing={2}>
            <Profile
              profile={profile}
              editing={editing}
              handleSubmit={handleSubmit}
              handleEditing={handleEditing}
              handleMessage={handleMessage}
              validate={validate}
            />
            <FindUsers />
            <Footer />
          </Stack>
        }
      />
    </Container>
  );
};

export default ProfileView;
