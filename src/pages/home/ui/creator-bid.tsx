import { Box } from "@mui/material";
import { LatestUploadFromCreators } from "./latest-upload-from-creators";

export const CreatorBid = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: {
          md: "row",
          xs: "column",
        },
        gap: {
          md: "32px",
          sm: "64px",
          xs: "40px",
        },
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "7fr 5fr",
          gap: "32px",
          flexShrink: 0,
          flexGrow: 1,
        }}
      >
        <Box
          sx={{
            backgroundColor: "gray",
            gridColumnStart: 1,
            gridColumnEnd: 2,
            gridRowStart: 1,
            gridRowEnd: 4,
          }}
        >
          a
        </Box>
        <Box
          sx={{
            backgroundColor: "gray",
            gridColumnStart: 2,
            gridRowStart: 1,
            gridRowEnd: 2,
          }}
        >
          a
        </Box>
        <Box
          sx={{
            backgroundColor: "gray",
            gridColumnStart: 2,
            gridRowStart: 2,
            gridRowEnd: 3,
          }}
        >
          a
        </Box>
        <Box
          sx={{
            backgroundColor: "gray",
            gridColumnStart: 2,
            gridRowStart: 3,
            gridRowEnd: 4,
          }}
        >
          a
        </Box>
      </Box>
      <LatestUploadFromCreators />
    </Box>
  );
};
