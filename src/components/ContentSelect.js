import { MenuItem, Select, Typography } from "@mui/material";
import React from "react";
import HorizontalStack from "./util/HorizontalStack";

const ContentSelect = () => {
  return (
    <HorizontalStack spacing={1}>
      <Typography>Content:</Typography>
      <Select
        size="small"
        value="post"  // static value set to "post"
        sx={{ minWidth: 150 }}
        // removed the onChange handler to make the select static
      >
        <MenuItem value={"post"}>Posts</MenuItem>
        <MenuItem value={"comment"}>Comments</MenuItem>
      </Select>
    </HorizontalStack>
  );
};

export default ContentSelect;
