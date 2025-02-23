import { Box, Typography } from "@mui/material";
import { gray } from "@/shared/theme/theme-primitives";
import coins from "@/shared/assets/coins.svg";

export const UserIdRow = () => {
  return (
    <Box display="flex" alignItems="center">
      <Typography variant="caption" fontWeight={400} color={gray[600]} mr="8px">
        0xc4c16ab5ac7d...b21a
      </Typography>
      <img src={coins} alt="coins" />
    </Box>
  );
};
