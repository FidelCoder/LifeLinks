import { useTheme } from "@emotion/react";
import {
  Avatar,
  Button,
  Card,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { MdCancel } from "react-icons/md";
import UserAvatar from "./UserAvatar";
import HorizontalStack from "./util/HorizontalStack";

const MobileProfile = (props) => {
  const theme = useTheme();
  const iconColor = theme.palette.primary.main;

  // Static user data
  const user = {
    _id: "12345",
    username: "StaticUser",
    biography: "Static user biography.",
  };

  // Static profile data
  const profile = {
    posts: {
      likeCount: 50,
      count: 10,
    },
  };

  return (
    <Card sx={{ display: { sm: "block", md: "none" }, mb: 2 }}>
      {user ? (
        <Stack spacing={2}>
          <HorizontalStack spacing={2} justifyContent="space-between">
            <HorizontalStack>
              <UserAvatar width={50} height={50} username={user.username} />
              <Typography variant="h6" textOverflow="ellipses">
                {user.username}
              </Typography>
            </HorizontalStack>

            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <HorizontalStack spacing={3}>
                <Stack alignItems="center">
                  <Typography>Likes</Typography>
                  <Typography color="text.secondary">
                    <b>{profile.posts.likeCount}</b>
                  </Typography>
                </Stack>
                <Stack alignItems="center">
                  <Typography color="text.secondary">Posts</Typography>
                  <Typography color="text.secondary">
                    <b>{profile.posts.count}</b>
                  </Typography>
                </Stack>
              </HorizontalStack>
            </Box>
          </HorizontalStack>
          <Divider />
          <Box>
            <IconButton onClick={props.handleEditing} sx={{ mr: 1 }}>
              {props.editing ? (
                <MdCancel color={iconColor} />
              ) : (
                <AiFillEdit color={iconColor} />
              )}
            </IconButton>
            {user.biography ? (
              <>
                <Typography textAlign="center" variant="p">
                  <b>Bio: </b>
                  {user.biography}
                </Typography>
              </>
            ) : (
              <Typography variant="p">
                <i>No bio yet - Tap on the edit icon to add your bio</i>
              </Typography>
            )}
            <Box sx={{ mt: 2 }}>
              <Button variant="outlined" onClick={props.handleMessage}>
                Message
              </Button>
            </Box>
            {props.editing && (
              <Box>
                {/* Removed ContentUpdateEditor since it likely contains more dynamic content. Replace with your static content as needed */}
                <div>Edit your static content here.</div>
              </Box>
            )}
          </Box>
        </Stack>
      ) : (
        <>Loading...</>
      )}
    </Card>
  );
};

export default MobileProfile;
