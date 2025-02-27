import { ROUTER_PATHS } from "@/shared/constants/routes";
import { gray, typography } from "@/shared/theme/theme-primitives";
import { CreatorNetwork } from "./creator-network";
import { Box, Button, Container, Typography, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { HotBidWidget } from "@/widgets/hot-bid";
import { PopularUsersWidget } from "@/widgets/popular-users-swiper";
import { HotCollectionWidget } from "@/widgets/hot-collections";
import { SloganInvitation } from "./slogan-invitation";

export const MainPage = () => {
  const navigate = useNavigate();
  const themeColor = useTheme().palette.mode;

  return (
    <>
      <Container>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            marginTop: { xs: "64px", sm: "112px", md: "128px" },
          }}
        >
          <Typography
            variant="hairline2"
            color={gray[600]}
            textTransform="uppercase"
            mb="8px"
          >
            Create, explore, & collect digital art NFTs.
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "2rem", sm: typography.h3.fontSize },
              mb: "24px",
            }}
          >
            The new creative economy.
          </Typography>
          <Button size="large" onClick={() => navigate(ROUTER_PATHS.DISCOVER)}>
            Start your search
          </Button>
        </Box>
      </Container>
      <Container
        sx={{
          marginBottom: "126px",
        }}
      >
        <CreatorNetwork />
      </Container>
      <Box
        sx={{
          backgroundColor: themeColor === "light" ? gray[300] : gray[800],
        }}
      >
        <Container
          sx={{
            py: "126px",
          }}
        >
          <PopularUsersWidget />
        </Container>
      </Box>
      <Container
        sx={{
          py: "126px",
        }}
      >
        <HotBidWidget />
      </Container>
      <Box
        sx={{
          backgroundColor: themeColor === "light" ? gray[300] : gray[800],
        }}
      >
        <Container
          sx={{
            py: "126px",
          }}
        >
          <HotCollectionWidget />
        </Container>
      </Box>
      <SloganInvitation />
      {/* <CreatorBid /> */}
    </>
  );
};
