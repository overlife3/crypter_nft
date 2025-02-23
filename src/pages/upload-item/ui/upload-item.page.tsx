import { gray } from "@/shared/theme/theme-primitives";
import { NavigateNext, West } from "@mui/icons-material";
import {
  Box,
  Breadcrumbs,
  Button,
  Container,
  Divider,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { Block } from "./block";
import createSingleImage from "@/pages/upload-item/assets/create-single-block.jpg";
import createMultipleImage from "@/pages/upload-item/assets/create-multiple-block.jpg";
import createSingleMobileImage from "@/pages/upload-item/assets/create-single-block-mobile.png";
import createMultipleMobileImage from "@/pages/upload-item/assets/create-multiple-block-mobile.png";

import { BlockMobile } from "./block-mobile";
import { ROUTER_PATHS } from "@/shared/constants/routes";

export const UploadItemPage = () => {
  const navigate = useNavigate();

  const toCreateSingleTokenPage = () => {
    navigate(ROUTER_PATHS.CREATE_SINGLE_TOKEN);
  };
  return (
    <Box sx={{ mt: "24px" }}>
      <Box
        sx={{
          mb: "24px",
        }}
      >
        <Container>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Button
              size="small"
              startIcon={<West fontSize="small" sx={{ color: gray[600] }} />}
            >
              Back to home
            </Button>
            <Breadcrumbs
              separator={
                <NavigateNext sx={{ color: gray[600] }} fontSize="small" />
              }
              aria-label="breadcrumb"
            >
              <Link
                style={{
                  color: gray[600],
                  fontSize: "14px",
                  textDecoration: "none",
                }}
                to="/"
              >
                Home
              </Link>
              <Typography
                sx={{
                  fontSize: "14px",
                }}
              >
                Upload Item
              </Typography>
            </Breadcrumbs>
          </Box>
        </Container>
      </Box>
      <Divider />

      <Container sx={{ mt: "80px", mb: "136px" }}>
        <Typography
          component="h1"
          variant="h2"
          sx={{ mb: "16px", fontSize: "48px", textAlign: "center" }}
        >
          Upload item
        </Typography>
        <Typography
          variant="caption"
          sx={{
            fontSize: "14px",
            mb: "80px",
            maxWidth: "640px",
            textAlign: "center",
            color: gray[600],
            mx: "auto",
          }}
          component="p"
        >
          Choose “
          <Typography component="span" variant="caption" color="textPrimary">
            Single
          </Typography>
          ” if you want your collectible to be one of a kind or “
          <Typography component="span" variant="caption" color="textPrimary">
            Multiple
          </Typography>
          ” if you want to sell one collectible multiple times
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "32px",
            mb: "32px",
            flexDirection: {
              xs: "column",
              sm: "row",
            },
          }}
        >
          <Block
            sx={{
              display: {
                xs: "none",
                sm: "block",
              },
            }}
            imgUrl={createSingleImage}
          >
            <Button onClick={toCreateSingleTokenPage}>Create Single</Button>
          </Block>
          <Block
            sx={{
              display: {
                xs: "none",
                sm: "block",
              },
            }}
            imgUrl={createMultipleImage}
          >
            <Button neutral sx={{ cursor: "default" }}>
              Create Multiple
            </Button>
          </Block>

          <BlockMobile
            sx={{
              display: {
                sx: "block",
                sm: "none",
              },
            }}
            href={ROUTER_PATHS.CREATE_SINGLE_TOKEN}
            imgUrl={createSingleMobileImage}
            title="Create Single"
          />
          <BlockMobile
            sx={{
              display: {
                sx: "block",
                sm: "none",
              },
            }}
            href="#"
            imgUrl={createMultipleMobileImage}
            title="Create Multiple"
          />
        </Box>
        <Typography
          component="p"
          sx={{
            fontSize: "12px",
            color: gray[600],
            textAlign: "center",
          }}
        >
          We do not own your private keys and cannot access your funds without
          your confirmation.
        </Typography>
      </Container>
    </Box>
  );
};
