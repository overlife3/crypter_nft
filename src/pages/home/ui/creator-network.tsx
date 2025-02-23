import { Avatar, Box, Button, Typography } from "@mui/material";
import mainImage from "@/shared/assets/home-page/main.jpg";
import { UserPreview } from "@/entities/user";
import { gray } from "@/shared/theme/theme-primitives";
import eth from "@/shared/assets/eth.png";
import { CurrentBid } from "./current-bid";
export const CreatorNetwork = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        justifyContent: "space-between",
        alignItems: { xs: "center", sm: "flex-start" },
        gap: "32px",
        paddingTop: { md: "128px", sm: "112px", xs: "64px" },
      }}
    >
      <Box sx={{ maxWidth: "100%", margin: "0 auto" }}>
        <Box
          component="img"
          src={mainImage}
          alt="main image"
          sx={{
            display: "block",
            maxWidth: "100%",
            height: "auto",
            borderRadius: "16px",
            objectPosition: "50% 50%",
            // objectFit: "contain",
          }}
        />
      </Box>
      <Box
        sx={{
          maxWidth: { md: "352px", sm: "308px" },
        }}
      >
        <Typography variant="h1" mb={"22px"}>
          the creator network®
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: "8px",
            mb: "40px",
          }}
        >
          <UserPreview />
          <Box sx={{ display: "flex", gap: "8px" }}>
            <Avatar src={eth} sx={{ width: 40, height: 40 }} />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography variant="caption2" color={gray[600]}>
                Creator
              </Typography>
              <Typography variant="caption">Enrico Cole</Typography>
            </Box>
          </Box>
        </Box>
        <CurrentBid style={{ marginBottom: "40px" }} />
        <Button size="large" neutral fullWidth sx={{ mb: "8px" }}>
          Place a bid
        </Button>
        <Button size="large" fullWidth>
          View item
        </Button>
      </Box>
    </Box>
  );
};
