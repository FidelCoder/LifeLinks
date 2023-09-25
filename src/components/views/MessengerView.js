import { Card, Grid } from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useState, useEffect } from "react";
import Messages from "../Messages";
import Navbar from "../Navbar";
import UserMessengerEntries from "../UserMessengerEntries";
import { useLocation } from "react-router-dom";

const MessengerView = () => {
  const [conservant, setConservant] = useState(null);
  const [conversations, setConversations] = useState([]);
  const [loading, setLoading] = useState(true);  // Consider removing or adjusting if not using loading state
  const [width, setWindowWidth] = useState(0);
  const mobile = width < 800;
  const { state } = useLocation();
  const newConservant = state && state.user;

  // Note: fetchConversations function has been removed

  useEffect(() => {
    // removed the call to fetchConversations

    updateDimensions();

    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const updateDimensions = () => {
    const width = window.innerWidth;
    setWindowWidth(width);
  };

  return (
    <Container>
      <Navbar />
      <Box>
        <Card sx={{ padding: 0 }}>
          <Grid
            container
            sx={{ height: "calc(100vh - 110px)" }}
            alignItems="stretch"
          >
            {!mobile ? (
              <>
                <Grid
                  item
                  xs={5}
                  sx={{
                    borderRight: 1,
                    borderColor: "divider",
                    height: "100%",
                  }}
                >
                  <UserMessengerEntries
                    conservant={conservant}
                    conversations={conversations}
                    setConservant={setConservant}
                    loading={loading}
                  />
                </Grid>

                <Grid item xs={7} sx={{ height: "100%" }}>
                  <Messages
                    conservant={conservant}
                    conversations={conversations}
                    setConservant={setConservant}
                    setConversations={setConversations}
                  />
                </Grid>
              </>
            ) : !conservant ? (
              <Grid
                item
                xs={12}
                sx={{
                  borderRight: 1,
                  borderColor: "divider",
                  height: "100%",
                }}
              >
                <UserMessengerEntries
                  conservant={conservant}
                  conversations={conversations}
                  setConservant={setConservant}
                  loading={loading}
                />
                <Box sx={{ display: "none" }}>
                  <Messages
                    conservant={conservant}
                    conversations={conversations}
                    setConservant={setConservant}
                    setConversations={setConversations}
                  />
                </Box>
              </Grid>
            ) : (
              <Grid item xs={12} sx={{ height: "100%" }}>
                <Messages
                  conservant={conservant}
                  conversations={conversations}
                  setConservant={setConservant}
                  setConversations={setConversations}
                  mobile
                />
              </Grid>
            )}
          </Grid>
        </Card>
      </Box>
    </Container>
  );
};

export default MessengerView;
