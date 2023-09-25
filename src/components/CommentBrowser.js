import { Button, Card, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Comment from "./Comment";
import Loading from "./Loading";
import SortBySelect from "./SortBySelect";

const CommentBrowser = (props) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false); // Set to false since no loading occurs
  const [sortBy, setSortBy] = useState("-createdAt");

  const fetchComments = () => {
    // Some static comments for demonstration purposes
    const staticComments = [
      {
        _id: "1",
        content: "This is a static comment.",
        createdAt: new Date(),
      },
      {
        _id: "2",
        content: "Another static comment.",
        createdAt: new Date(),
      },
    ];
    setComments(staticComments);
  };

  useEffect(() => {
    fetchComments();
  }, [sortBy]);

  const handleSortBy = (e) => {
    const newSortName = e.target.value;
    let newSortBy;

    Object.keys(sorts).forEach((sortName) => {
      if (sorts[sortName] === newSortName) newSortBy = sortName;
    });

    setComments([]);
    setSortBy(newSortBy);
  };

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const sorts = {
    "-createdAt": "Latest",
    createdAt: "Earliest",
  };

  return (
    <Stack spacing={2}>
      <Card>
        <SortBySelect onSortBy={handleSortBy} sortBy={sortBy} sorts={sorts} />
      </Card>
      {loading ? (
        <Loading />
      ) : (
        <>
          {comments &&
            comments.map((comment) => (
              <Comment key={comment._id} comment={comment} profile />
            ))}

          <Stack py={5} alignItems="center">
            <Typography variant="h5" color="text.secondary" gutterBottom>
              {comments.length > 0 ? (
                <>All comments have been viewed</>
              ) : (
                <>No comments available</>
              )}
            </Typography>
            <Button variant="text" size="small" onClick={handleBackToTop}>
              Back to top
            </Button>
          </Stack>
        </>
      )}
    </Stack>
  );
};

export default CommentBrowser;
