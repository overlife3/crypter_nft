import { Notifications } from "@mui/icons-material";
import { Badge, badgeClasses, IconButton, Link, styled } from "@mui/material";
import { ROUTER_PATHS } from "@/shared/constants/routes";

const StyledBadge = styled(Badge)({
  [`& .${badgeClasses.badge}`]: {
    minWidth: "12px",
    height: "12px",
  },
});

export const NotificationBell = () => {
  // Здесь логика получения информации (например из стора) об уведомлениях.
  // Получение уведомлений, я бы сделал в этом сегменте, поэтому ui реализовал здесь же.
  return (
    <Link href={ROUTER_PATHS.ACTIVITY}>
      <IconButton>
        <StyledBadge badgeContent="" color="success">
          <Notifications />
        </StyledBadge>
      </IconButton>
    </Link>
  );
};
