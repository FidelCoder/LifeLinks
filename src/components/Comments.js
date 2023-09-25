import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import Comment from "./Comment";
import CommentEditor from "./CommentEditor";

const Comments = () => {
  const [comments, setComments] = useState(null);

  const initComments = () => {
    // Static comments for demonstration
    const staticComments = [
      {
        _id: "1",
        content: "This is a static comment.",
        children: [],
      },
      {
        _id: "2",
        content: "This is another static comment.",
        children: [],
      },
    ];
    setComments(staticComments);
  };

  useEffect(() => {
    initComments();
  }, []);

  const findComment = (id) => {
    let commentToFind;

    const recurse = (comment, id) => {
      if (comment._id === id) {
        commentToFind = comment;
      } else {
        for (let i = 0; i < comment.children.length; i++) {
          const commentToSearch = comment.children[i];
          recurse(commentToSearch, id);
        }
      }
    };

    for (let i = 0; i < comments.length; i++) {
      const comment = comments[i];
      recurse(comment, id);
    }

    return commentToFind;
  };

  const removeComment = (removedComment) => {
    if (removedComment.parent) {
      const parentComment = findComment(removedComment.parent);
      parentComment.children = parentComment.children.filter(
        (comment) => comment._id !== removedComment._id
      );
    } else {
      setComments(
        comments.filter((comment) => comment._id !== removedComment._id)
      );
    }
  };

  const editComment = (editedComment) => {
    if (editedComment.parent) {
      let parentComment = findComment(editedComment.parent);
      for (let i = 0; i < parentComment.children.length; i++) {
        if (parentComment.children[i]._id === editedComment._id) {
          parentComment.children[i] = editedComment;
        }
      }
    } else {
      for (let i = 0; i < comments.length; i++) {
        if (comments[i]._id === editedComment._id) {
          comments[i] = editedComment;
        }
      }
    }
  };

  const addComment = (comment) => {
    if (comment.parent) {
      const parentComment = findComment(comment.parent);
      parentComment.children = [comment, ...parentComment.children];
    } else {
      setComments([comment, ...comments]);
    }
  };

  return comments ? (
    <Stack spacing={2}>
      <CommentEditor
        addComment={addComment}
        label="What are your thoughts on this post?"
      />

      {comments.length > 0 ? (
        <Box pb={4}>
          {comments.map((comment, i) => (
            <Comment
              addComment={addComment}
              removeComment={removeComment}
              editComment={editComment}
              comment={comment}
              key={comment._id}
              depth={0}
            />
          ))}
        </Box>
      ) : (
        <Box
          display="flex"
          justifyContent="center"
          textAlign="center"
          paddingY={3}
        >
          <Box>
            <Typography variant="h5" color="text.secondary" gutterBottom>
              No comments yet...
            </Typography>
            <Typography variant="body" color="text.secondary">
              Be the first one to comment!
            </Typography>
          </Box>
        </Box>
      )}
    </Stack>
  ) : null;  // Not loading any async operations, so we return null
};

export default Comments;
