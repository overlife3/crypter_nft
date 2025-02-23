import {
  AppBar,
  Box,
  Container,
  Divider,
  styled,
  Toolbar,
} from "@mui/material";
import { ReactNode } from "react";
import { UiLogo } from "./ui-logo";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexShrink: 0,
  border: "none",
  backgroundColor: "transparent",
  boxShadow: "none",
  padding: "20px 0",
});

export function UiHeader({
  right,
  links,
}: {
  links?: ReactNode;
  right?: ReactNode;
}) {
  return (
    <AppBar
      position="fixed"
      enableColorOnDark
      sx={{
        boxShadow: 0,
        bgcolor: "transparent",
        backgroundImage: "none",
        mt: 0,
        color: "inherit",
        backdropFilter: "blur(16px)",
      }}
      component="header"
    >
      <Container>
        <StyledToolbar variant="dense" disableGutters>
          <Box sx={{ display: "flex", gap: "32px", alignItems: "center" }}>
            <UiLogo isLinkToHome />
            <Divider
              sx={{
                display: { xs: "none", md: "block" },
                borderRightWidth: "2px",
                height: "40px",
                margin: 0,
              }}
              orientation="vertical"
              variant="middle"
              flexItem
            />
            {links}
          </Box>
          {right}
        </StyledToolbar>
      </Container>
      <Divider />
    </AppBar>
  );
}
