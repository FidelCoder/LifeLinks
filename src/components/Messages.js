import {
  Button,
  Divider,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useRef, useState } from "react";
import { AiFillBackward, AiFillCaretLeft, AiFillMessage } from "react-icons/ai";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import Message from "./Message";
import SendMessage from "./SendMessage";
import UserAvatar from "./UserAvatar";
import HorizontalStack from "./util/HorizontalStack";

const Messages = (props) => {
  const messagesEndRef = useRef(null);
  const [messages, setMessages] = useState([
    { direction: "from", content: "Static message from user." },
    { direction: "to", content: "Static message to user." },
  ]); // Static messages for demonstration
  const [loading, setLoading] = useState(false); // No loading state since we're using static content

  const conversation = props.conservant;

  useEffect(() => {
    if (messages) {
      messagesEndRef.current?.scrollIntoView();
    }
  }, [messages]);

  const handleSendMessage = (content) => {
    const newMessage = { direction: "from", content };
    setMessages([...messages, newMessage]);
  };

  return props.conservant ? (
    <>
      <HorizontalStack
        alignItems="center"
        spacing={2}
        sx={{ px: 2, height: "60px" }}
      >
        {props.mobile && (
          <IconButton
            onClick={() => props.setConservant(null)}
            sx={{ padding: 0 }}
          >
            <AiFillCaretLeft />
          </IconButton>
        )}
        <UserAvatar
          username={props.conservant.username}
          height={30}
          width={30}
        />
        <Typography>
          <Link to={"/users/" + props.conservant.username}>
            <b>{props.conservant.username}</b>
          </Link>
        </Typography>
      </HorizontalStack>
      <Divider />
      <Box sx={{ height: "calc(100vh - 240px)" }}>
        <Box sx={{ height: "100%" }}>
          <Stack
            sx={{ padding: 2, overflowY: "auto", maxHeight: "100%" }}
            direction="column-reverse"
          >
            <div ref={messagesEndRef} />
            {messages.map((message, i) => (
              <Message
                conservant={props.conservant}
                message={message}
                key={i}
              />
            ))}
          </Stack>
        </Box>
      </Box>
      <SendMessage onSendMessage={handleSendMessage} />
    </>
  ) : (
    <Stack
      sx={{ height: "100%" }}
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      <AiFillMessage size={80} />
      <Typography variant="h5">PostIt Messenger</Typography>
      <Typography color="text.secondary">
        Privately message other users on PostIt
      </Typography>
    </Stack>
  );
};

export default Messages;
