import { gray } from "@/shared/theme/theme-primitives";
import { Avatar, Box, Typography } from "@mui/material";

export const UserPreview = () => {
  return (
    <Box sx={{ display: "flex", gap: "8px" }}>
      <Avatar sx={{ width: 40, height: 40 }} />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography variant="caption2" color={gray[600]}>
          Creator
        </Typography>
        <Typography variant="caption">Enrico Cole</Typography>
      </Box>
    </Box>
  );
};
