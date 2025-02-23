import {
  Box,
  Button,
  Divider,
  Menu,
  menuClasses,
  MenuItem,
  MenuProps,
  Paper,
  styled,
  Typography,
} from "@mui/material";
import { UserIdRow } from "@/entities/user";
import eth from "@/shared/assets/eth.png";
import {
  ImageOutlined,
  LogoutOutlined,
  PersonOutline,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { ROUTER_PATHS } from "@/shared/constants/routes";
interface ProfileMenuProps extends Omit<MenuProps, "onClose"> {
  handleClose: () => void;
}

const StyledMenu = styled(Menu)({
  [`.${menuClasses.paper}`]: {
    padding: "24px 8px",
  },
});

// const StyledUserIdTypography = styled(Typography)(({theme}) => ({
//     color: gray[600],
//     ...theme.applyStyles("dark", {
//         color: gray[600]
//     })
// }))

export const ProfileMenu = (props: ProfileMenuProps) => {
  const { handleClose } = props;
  const navigate = useNavigate();
  return (
    <StyledMenu onClose={handleClose} {...props}>
      <Typography variant="body1">Erico Cole</Typography>
      <UserIdRow />
      <Paper sx={{ padding: "8px", mt: "8px", mb: "24px" }}>
        <Box display="flex" gap="16px" alignItems="center" mb="10px">
          <img src={eth} alt="eth logo" style={{ width: 40, height: 40 }} />
          <div>
            <Typography variant="caption">Balance</Typography>
            <Typography variant="body1" fontWeight={600}>
              4.689 ETH
            </Typography>
          </div>
        </Box>
        <Button size="small">Manage fun on Coinbase</Button>
      </Paper>
      <MenuItem
        onClick={() => {
          handleClose();
          navigate(ROUTER_PATHS.PROFILE);
        }}
      >
        <PersonOutline sx={{ mr: "8px" }} />
        My profile
      </MenuItem>
      <Divider />
      <MenuItem
        onClick={() => {
          handleClose();
          navigate(ROUTER_PATHS.PROFILE_ITEMS);
        }}
      >
        <ImageOutlined sx={{ mr: "8px" }} /> My items
      </MenuItem>
      <Divider />
      <MenuItem onClick={handleClose}>
        <LogoutOutlined sx={{ mr: "8px" }} />
        Logout
      </MenuItem>
    </StyledMenu>
  );
};
