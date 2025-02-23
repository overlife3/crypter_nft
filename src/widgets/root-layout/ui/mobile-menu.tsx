import { Button, Divider, IconButton, Menu, MenuItem } from "@mui/material";
import {
  HomeOutlined,
  Menu as MenuIcon,
  QuestionMarkOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import { useState } from "react";
import { ROUTER_PATHS } from "@/shared/constants/routes";
import { useNavigate } from "react-router-dom";

export const MobileMenu = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <IconButton
        sx={{
          display: { xs: "flex", md: "none" },
          width: 40,
          height: 40,
        }}
        onClick={handleClick}
        size="small"
      >
        <MenuIcon />
      </IconButton>
      <Menu
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              my: "4px",
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem
          onClick={() => {
            handleClose();
            navigate(ROUTER_PATHS.HOME);
          }}
        >
          <HomeOutlined sx={{ mr: "8px" }} fontSize="small" />
          Home
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            navigate(ROUTER_PATHS.DISCOVER);
          }}
        >
          <SearchOutlined sx={{ mr: "8px" }} fontSize="small" />
          Discover
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            navigate(ROUTER_PATHS.FAQ);
          }}
        >
          <QuestionMarkOutlined sx={{ mr: "8px" }} fontSize="small" />
          How it work
        </MenuItem>
        <Divider />
        <Button
          neutral
          size="small"
          sx={{ mt: "8px", mb: "8px" }}
          onClick={() => {
            handleClose();
            navigate(ROUTER_PATHS.UPLOAD_ITEM);
          }}
        >
          Upload
        </Button>
      </Menu>
    </>
  );
};
