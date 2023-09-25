import { useTheme } from "@emotion/react";
import {
  Avatar,
  IconButton,
  Stack,
  TextField,
  Typography,
  Button,
  InputAdornment,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import {
  AiFillFileText,
  AiFillHome,
  AiFillMessage,
  AiOutlineSearch,
} from "react-icons/ai";
import UserAvatar from "./UserAvatar";
import HorizontalStack from "./util/HorizontalStack";

const Navbar = () => {
  const theme = useTheme();
  
  // Static user data
  const user = {
    username: "StaticUser"
  };

  const [search, setSearch] = useState("");
  const [searchIcon, setSearchIcon] = useState(false);
  const [width, setWindowWidth] = useState(0);

  const handleLogout = (e) => {
    // Handle the static logout logic here
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearchIcon = (e) => {
    setSearchIcon(!searchIcon);
  };

  return (
    <Stack mb={2}>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          pt: 2,
          pb: 0,
        }}
      >
        <HorizontalStack>
          <AiFillFileText
            size={33}
            color={theme.palette.primary.main}
            // Static onClick action
          />
          <Typography
            variant={width < 600 ? "h6" : "h4"}
            mr={1}
            color={theme.palette.primary.main}
          >
            PostIt
          </Typography>
        </HorizontalStack>

        {width >= 600 && (
          <Box>
            <TextField
              size="small"
              label="Search for posts..."
              onChange={handleChange}
              value={search}
            />
          </Box>
        )}

        <HorizontalStack>
          {width < 500 && (
            <IconButton onClick={handleSearchIcon}>
              <AiOutlineSearch />
            </IconButton>
          )}
          <IconButton>
            <AiFillHome />
          </IconButton>
          {user ? (
            <>
              <IconButton>
                <AiFillMessage />
              </IconButton>
              <UserAvatar width={30} height={30} username={user.username} />
              <Button onClick={handleLogout}>Logout</Button>
            </>
          ) : (
            <>
              <Button variant="text" sx={{ minWidth: 80 }}>
                Sign Up
              </Button>
              <Button variant="text" sx={{ minWidth: 65 }}>
                Login
              </Button>
            </>
          )}
        </HorizontalStack>
      </Stack>
      {width < 600 && searchIcon && (
        <Box mt={2}>
          <TextField
            size="small"
            label="Search for posts..."
            fullWidth
            onChange={handleChange}
            value={search}
          />
        </Box>
      )}
    </Stack>
  );
};

export default Navbar;
