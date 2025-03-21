import { Box, Button, Container, styled } from "@mui/material";
import bgUrl from "../assets/bg.webp";
import { CreateOutlined, ImageOutlined } from "@mui/icons-material";
import { gray } from "@/shared/theme/theme-primitives";
import { UserPaper } from "./user-paper";
import { ProfileTabs } from "./profile-tabs";

const CustomButton = styled(Button)(() => ({
  borderColor: `${gray[50]} !important`,
  color: gray[50],
  "&:hover": {
    backgroundColor: gray[50],
    color: gray[700],
  },
}));

export const ProfilePage = () => {
  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `url(${bgUrl})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "406px",
          mt: "-80px",
        }}
      >
        <Container sx={{ height: "100%" }}>
          <Box
            sx={{
              display: "flex",
              height: "100%",
              justifyContent: "end",
              alignItems: "end",
              paddingBottom: "20px",
            }}
          >
            <Box>
              <CustomButton sx={{ mr: "20px" }} endIcon={<ImageOutlined />}>
                Edit cover photo
              </CustomButton>
              <CustomButton endIcon={<CreateOutlined />}>
                Edit cover photo
              </CustomButton>
            </Box>
          </Box>
        </Container>
      </Box>
      <Container
        sx={{
          display: "flex",
          gap: "64px",
          flexDirection: {
            xs: "column",
            md: "row",
          },
          alignItems: {
            xs: "center",
            md: "stretch",
          },
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "256px",
            height: "580px",
            flexShrink: 0,
          }}
        >
          <UserPaper sx={{ position: "absolute", bottom: 0, left: 0 }} />
        </Box>
        <ProfileTabs
          sx={{
            mt: "80px",
          }}
        />
      </Container>
    </Box>
  );
};
