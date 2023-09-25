import { Button, IconButton, Typography, useTheme } from "@mui/material";
import { Box, compose } from "@mui/system";
import React, { useState } from "react";
import { AiFillEdit, AiOutlineLine, AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
import CommentEditor from "./CommentEditor";
import ContentDetails from "./ContentDetails";
import HorizontalStack from "./util/HorizontalStack";
import Markdown from "./Markdown";
import { MdCancel } from "react-icons/md";
import { BiReply, BiTrash } from "react-icons/bi";
import { BsReply, BsReplyFill } from "react-icons/bs";
import Moment from "react-moment";

const Comment = (props) => {
  const theme = useTheme();
  const iconColor = theme.palette.primary.main;
  const { depth, addComment, removeComment, editComment } = props;
  const commentData = props.comment;
  const [minimised, setMinimised] = useState(depth % 4 === 3);
  const [replying, setReplying] = useState(false);
  const [editing, setEditing] = useState(false);
  const [comment, setComment] = useState(commentData);
  const user = { userId: "staticUserId" }; // Static user for demonstration purposes
  const isAuthor = user && user.userId === comment.commenter._id;

  const handleSetReplying = () => {
    setReplying(!replying);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const content = e.target.content.value;
    const newCommentData = { ...comment, content, edited: true };
    setComment(newCommentData);
    editComment(newCommentData);
    setEditing(false);
  };

  const handleDelete = () => {
    removeComment(comment);
  };

  let style = {
    backgroundColor: theme.palette.grey[100],
    borderRadius: 1.5,
    mb: theme.spacing(2),
    padding: theme.spacing(0),
  };

  if (depth % 2 === 1) {
    style.backgroundColor = "white";
  }

  return (
    <Box sx={style}>
      <Box
        sx={{
          pl: theme.spacing(2),
          pt: theme.spacing(1),
          pb: theme.spacing(1),
          pr: 1,
        }}
      >
        <HorizontalStack justifyContent="space-between">
          <HorizontalStack>
            <ContentDetails
              username={comment.commenter.username}
              createdAt={comment.createdAt}
              edited={comment.edited}
            />
            <IconButton
              color="primary"
              onClick={() => setMinimised(!minimised)}
            >
              {minimised ? (
                <AiOutlinePlus size={15} />
              ) : (
                <AiOutlineLine size={15} />
              )}
            </IconButton>
          </HorizontalStack>
          {!minimised && (
            <HorizontalStack spacing={1}>
              <IconButton
                variant="text"
                size="small"
                onClick={handleSetReplying}
              >
                {!replying ? (
                  <BsReplyFill color={iconColor} />
                ) : (
                  <MdCancel color={iconColor} />
                )}
              </IconButton>
              {isAuthor && (
                <HorizontalStack spacing={1}>
                  <IconButton
                    variant="text"
                    size="small"
                    onClick={() => setEditing(!editing)}
                  >
                    {editing ? (
                      <MdCancel color={iconColor} />
                    ) : (
                      <AiFillEdit color={iconColor} />
                    )}
                  </IconButton>
                  <IconButton
                    variant="text"
                    size="small"
                    onClick={handleDelete}
                  >
                    <BiTrash color={theme.palette.error.main} />
                  </IconButton>
                </HorizontalStack>
              )}
            </HorizontalStack>
          )}
        </HorizontalStack>
        {!minimised && (
          <Box sx={{ mt: 1 }} overflow="hidden">
            {!editing ? (
              <Markdown content={comment.content} />
            ) : (
              <CommentEditor
                comment={comment}
                addComment={addComment}
                setReplying={setReplying}
                label="Edit your comment"
              />
            )}
            {replying && !minimised && (
              <Box sx={{ mt: 2 }}>
                <CommentEditor
                  comment={comment}
                  addComment={addComment}
                  setReplying={setReplying}
                  label="What are your thoughts on this comment?"
                />
              </Box>
            )}
            {comment.children && (
              <Box sx={{ pt: theme.spacing(2) }}>
                {comment.children.map((reply, i) => (
                  <Comment
                    key={reply._id}
                    comment={reply}
                    depth={depth + 1}
                    addComment={addComment}
                    removeComment={removeComment}
                    editComment={editComment}
                  />
                ))}
              </Box>
            )}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Comment;
