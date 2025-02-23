import { Box, styled, Typography } from "@mui/material";
import image from "@/shared/assets/user-1.png";
import { gray } from "@/shared/theme/theme-primitives";
import { green } from "@mui/material/colors";
import { useState } from "react";
import { ProfileMenu } from "./profile-menu";

export const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  padding: "2px",
  justifyContent: "space-between",
  alignItems: "center",
  border: `2px solid`,
  borderColor: gray[400],
  borderRadius: "90px",
  gap: "12px",
  cursor: "pointer",
  ":hover": {
    backgroundColor: "rgba(0, 0, 0, 0.05)",
  },
  ...theme.applyStyles("dark", {
    borderColor: gray[700],
    ":hover": {
      backgroundColor: "rgba(255, 255, 255, 0.1)",
    },
  }),
}));

export const Profile = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <StyledBox onClick={handleClick}>
        <Box
          display={"flex"}
          alignItems={"center"}
          bgcolor={green[400]}
          borderRadius={"50%"}
          overflow={"hidden"}
        >
          <img
            src={image}
            alt="avatar"
            style={{
              width: "32px",
              height: "32px",
              objectPosition: "50% 50%",
            }}
          />
        </Box>
        <Box display={{ xs: "none", md: "flex" }} alignItems={"center"}>
          <Typography mr={"4px"} fontSize={14} variant="button">
            7.00698
          </Typography>
          <Typography mr={"6px"} color="success" fontSize={14} variant="button">
            ETH
          </Typography>
        </Box>
      </StyledBox>
      <ProfileMenu
        handleClose={handleClose}
        open={open}
        anchorEl={anchorEl}
        elevation={0}
        transformOrigin={{ horizontal: "center", vertical: "top" }}
        anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
      />
    </>
  );
};
