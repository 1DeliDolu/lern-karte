import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

export default function LernLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ display: "grid", gap: 4 }}>{children}</Box>
    </Container>
  );
}
