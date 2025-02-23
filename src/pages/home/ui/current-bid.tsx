import { gray } from "@/shared/theme/theme-primitives";
import { Box, Paper, Typography } from "@mui/material";
import { CSSProperties } from "react";

export const CurrentBid = ({ style }: { style: CSSProperties }) => {
  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "32px",
        ...style,
      }}
    >
      <Typography variant="body2">Current Bid</Typography>
      <Typography variant="h2">1.00 ETH</Typography>
      <Typography variant="body1" color={gray[600]} mb="24px">
        $3,618.36
      </Typography>
      <Typography variant="body2" mb="8px">
        Auction ending in
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          minWidth: "230px",
        }}
      >
        <div>
          <Typography variant="h4">19</Typography>
          <Typography variant="body2" color={gray[600]}>
            Hrs
          </Typography>
        </div>
        <div>
          <Typography variant="h4">24</Typography>
          <Typography variant="body2" color={gray[600]}>
            mins
          </Typography>
        </div>
        <div>
          <Typography variant="h4">07</Typography>
          <Typography variant="body2" color={gray[600]}>
            secs
          </Typography>
        </div>
      </Box>
    </Paper>
  );
};
