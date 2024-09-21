// src/components/TicketCard.js

import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  IconButton,
  Box,
  CircularProgress,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { format } from "date-fns";

function TicketCard({ ticket, onDelete }) {
  const [deleting, setDeleting] = useState(false);

  const handleDelete = async () => {
    setDeleting(true);
    await onDelete(ticket.id);
    setDeleting(false);
  };

  return (
    <Card sx={{ maxWidth: 500, marginBottom: 2 }}>
      <CardContent>
        <Typography variant="caption" color="text.secondary">
          {format(new Date(ticket.created_at), "PPP p")}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: 1,
          }}
        >
          <Typography variant="h6">{ticket.title}</Typography>
          <IconButton
            aria-label="delete"
            onClick={handleDelete}
            size="small"
            disabled={deleting}
            color="error"
          >
            {deleting ? <CircularProgress size={20} /> : <DeleteIcon />}
          </IconButton>
        </Box>
        <Typography variant="body2" color="text.primary" sx={{ mt: 1 }}>
          {ticket.content}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default TicketCard;
