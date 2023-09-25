import {
  Backdrop,
  Box,
  Card,
  Modal,
  Stack,
  Typography,
} from "@mui/material";
import React, { useRef, useState } from "react";
import UserEntry from "./UserEntry";

const styles = {
  container: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    maxWidth: "80%",
    maxHeight: 400,
    overflowY: "auto",
  },
};

const UserLikeModal = ({ postId, open, setOpen }) => {
  // Static user likes data
  const userLikes = [
    { username: "User1", id: "1" },
    { username: "User2", id: "2" },
    { username: "User3", id: "3" },
  ];

  const handleClose = () => setOpen(false);
  const handleBackdropClick = (event) => {
    event.stopPropagation();
    setOpen(false);
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      BackdropComponent={Backdrop}
      BackdropProps={{ onClick: handleBackdropClick }}
    >
      <Box
        sx={styles.container}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <Card>
          <Typography variant="h5" mb={2}>
            Liked by
          </Typography>
          <Stack>
            <Stack spacing={2}>
              {userLikes &&
                userLikes.map((like) => (
                  <UserEntry username={like.username} key={like.username} />
                ))}
            </Stack>
          </Stack>
        </Card>
      </Box>
    </Modal>
  );
};

export default UserLikeModal;
