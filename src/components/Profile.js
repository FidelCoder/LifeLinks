import { useTheme } from "@emotion/react";
import {
  Avatar,
  Button,
  Card,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import ContentUpdateEditor from "./ContentUpdateEditor";
import UserAvatar from "./UserAvatar";
import HorizontalStack from "./util/HorizontalStack";

const Profile = (props) => {
  const theme = useTheme();
  const iconColor = theme.palette.primary.main;

  // Static user data
  const user = {
    username: "JohnDoe",
    biography: "Hello, I'm John Doe! Welcome to my profile.",
    _id: "1"
  };

  // Note: Adjust the following two values as necessary for demonstration purposes.
  const currentUser = { userId: "1" }; // Represents the current user

  return (
    <Card>
      {user ? (
        <Stack alignItems="center" spacing={2}>
          <Box my={1}>
            <UserAvatar width={150} height={150} username={user.username} />
          </Box>

          <Typography variant="h5">{user.username}</Typography>

          {props.editing ? (
            <Box>
              <ContentUpdateEditor
                handleSubmit={props.handleSubmit}
                originalContent={user.biography}
                validate={props.validate}
              />
            </Box>
          ) : user.biography ? (
            <Typography textAlign="center" variant="p">
              <b>Bio: </b>
              {user.biography}
            </Typography>
          ) : (
            <Typography variant="p">
              <i>No bio yet</i>
            </Typography>
          )}

          {currentUser && user._id === currentUser.userId && (
            <Box>
              <Button
                startIcon={<AiFillEdit color={iconColor} />}
                onClick={props.handleEditing}
              >
                {props.editing ? <>Cancel</> : <>Edit bio</>}
              </Button>
            </Box>
          )}

          {currentUser && user._id !== currentUser.userId && (
            <Button variant="outlined" onClick={props.handleMessage}>
              Message
            </Button>
          )}

          <HorizontalStack>
            <Typography color="text.secondary">
              Likes <b>42</b>
            </Typography>
            <Typography color="text.secondary">
              Posts <b>10</b>
            </Typography>
          </HorizontalStack>
        </Stack>
      ) : (
        <Typography>
          Profile not found.
        </Typography>
      )}
    </Card>
  );
};

export default Profile;
