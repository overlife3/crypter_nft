import { Box, SxProps, Theme, Typography } from "@mui/material";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { ROUTER_PATHS } from "../constants/routes";

export function UiLogo({
  isLinkToHome,
  direction = "row",
  single,
  sx,
}: {
  sx?: SxProps<Theme>;
  direction?: "row" | "column";
  single?: boolean;
  isLinkToHome?: boolean;
}) {
  const navigate = useNavigate();

  if (single) return <img src={logo} alt="logo" />;
  const handleClick = () => {
    if (isLinkToHome) {
      navigate(ROUTER_PATHS.HOME);
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        gap: "8px",
        alignItems: "center",
        flexDirection: direction,
        flexShrink: 0,
        flexGrow: 0,
        cursor: isLinkToHome ? "pointer" : "default",
        ...sx,
      }}
      onClick={handleClick}
    >
      <img src={logo} alt="logo" />

      <Typography variant="body1" fontWeight={600}>
        crypter
      </Typography>
    </Box>
  );
}
