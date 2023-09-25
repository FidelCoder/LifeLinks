import {
  Avatar,
  Card,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";
import UserAvatar from "./UserAvatar";
import HorizontalStack from "./util/HorizontalStack";
import UserEntry from "./UserEntry";

const FindUsers = () => {
  // Static list of users
  const staticUsers = [
    { username: "JohnDoe" },
    { username: "JaneSmith" },
    { username: "Alice" },
    { username: "Bob" },
    { username: "Charlie" },
  ];

  const [users, setUsers] = useState(staticUsers);

  return (
    <Card>
      <Stack spacing={2}>
        <HorizontalStack justifyContent="space-between">
          <HorizontalStack>
            <AiOutlineUser />
            <Typography>Find Others</Typography>
          </HorizontalStack>
        </HorizontalStack>

        <Divider />

        {users &&
          users.map((user) => (
            <UserEntry username={user.username} key={user.username} />
          ))
        }
      </Stack>
    </Card>
  );
};

export default FindUsers;
