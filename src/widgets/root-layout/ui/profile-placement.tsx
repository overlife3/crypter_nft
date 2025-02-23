import { Box, Button } from "@mui/material";
import { ColorModeSelect } from "@/features/theme/toggle-mode";
import { NotificationBell } from "@/features/notifications";
import { useNavigate } from "react-router-dom";
import { ROUTER_PATHS } from "@/shared/constants/routes";
import { Profile } from "./profile";

export const ProfilePlacement = () => {
  const session = true;
  const navigate = useNavigate();

  if (!session)
    return (
      <Box>
        <Button
          sx={{ mr: "10px" }}
          onClick={() => navigate(ROUTER_PATHS.CONNECT_WALLET)}
        >
          Connect Wallet
        </Button>
        <ColorModeSelect />
      </Box>
    );

  return (
    <Box sx={{ display: "flex", gap: { xs: "20px", md: "24px" } }}>
      <NotificationBell />
      <Box display="flex" gap="12px">
        <Button
          sx={{ display: { xs: "none", md: "block" } }}
          neutral
          onClick={() => navigate(ROUTER_PATHS.UPLOAD_ITEM)}
        >
          Upload
        </Button>
        <Profile />
      </Box>
    </Box>
  );
};
