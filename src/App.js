import React, { useState } from "react";
import { Box, Container } from "@mui/material";
import Header from "./components/Header";
import Tickets from "./components/Tickets";

function App() {
  const [refreshFlag, setRefreshFlag] = useState(false);

  const handleRefresh = () => {
    setRefreshFlag((prev) => !prev);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Header title="AssistPro Demo DB" onRefresh={handleRefresh} />
      <Box component="main" sx={{ flexGrow: 1, p: 3, overflow: "auto", mt: 8 }}>
        {/* mt: 8 adds top margin to prevent overlap with the fixed header */}
        <Container maxWidth="md">
          <Tickets refreshFlag={refreshFlag} />
        </Container>
      </Box>
    </Box>
  );
}

export default App;
