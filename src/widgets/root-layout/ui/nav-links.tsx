import { Box, Link, styled } from "@mui/material";
import { useMatch } from "react-router-dom";
import { gray } from "@/shared/theme/theme-primitives";
import clsx from "clsx";
import { ROUTER_PATHS } from "@/shared/constants/routes";

const StyledLink = styled(Link)(({ theme }) => ({
  color: gray[600],
  "&:hover": {
    color: gray[800],
  },
  "&.active-link": {
    color: gray[800],
  },
  ...theme.applyStyles("dark", {
    color: gray[600],
    "&:hover": {
      color: gray[50],
    },
    "&.active-link": {
      color: gray[50],
    },
  }),
}));

export function NavLinks() {
  const isHomeActive = useMatch(ROUTER_PATHS.HOME);
  const isDiscoverActive = useMatch(ROUTER_PATHS.DISCOVER);
  const isFaqActive = useMatch(ROUTER_PATHS.FAQ);

  return (
    <Box sx={{ display: { xs: "none", md: "flex" }, gap: "32px" }}>
      <StyledLink
        className={clsx({ "active-link": isHomeActive })}
        href={ROUTER_PATHS.HOME}
      >
        Home
      </StyledLink>
      <StyledLink
        className={clsx({ "active-link": isDiscoverActive })}
        href={ROUTER_PATHS.DISCOVER}
      >
        Discover
      </StyledLink>
      <StyledLink
        className={clsx({ "active-link": isFaqActive })}
        href={ROUTER_PATHS.FAQ}
      >
        How it work
      </StyledLink>
    </Box>
  );
}
