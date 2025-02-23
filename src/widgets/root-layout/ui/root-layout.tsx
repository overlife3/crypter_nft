import { Box, useTheme } from "@mui/material";
import { UiHeader } from "@/shared/ui/ui-header";
import { NavLinks } from "./nav-links";
import { Outlet } from "react-router-dom";
import { ProfilePlacement } from "./profile-placement";
import { MobileMenu } from "./mobile-menu";
import { ColorModeSelect } from "@/features/theme/toggle-mode";
import { GroupLinksType, UiFooter } from "@/shared/ui/ui-footer";
import { ROUTER_PATHS } from "@/shared/constants/routes";
import { SubscribeForm } from "@/features/subscribe-to-newsletter";
import { useWindowWidth } from "@/shared/lib/use-window-width";
import { useEffect, useState } from "react";

export function RootLayout() {
  const windowWidth = useWindowWidth();
  const theme = useTheme();
  const [customLinkGroups, setCustomLinkGroups] = useState(linkGroups);

  useEffect(() => {
    if (
      windowWidth <= theme.breakpoints.values.lg &&
      windowWidth >= theme.breakpoints.values.sm
    ) {
      setCustomLinkGroups(linkGroups.slice(0, 1));
    } else {
      setCustomLinkGroups(linkGroups);
    }
  }, [windowWidth, theme]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        paddingTop: "80px",
      }}
    >
      <UiHeader
        links={<NavLinks />}
        right={
          <Box sx={{ display: "flex", gap: "20px" }}>
            <ProfilePlacement />
            <Box sx={{ display: "flex" }}>
              <MobileMenu />
              <ColorModeSelect />
            </Box>
          </Box>
        }
      />
      <main>
        <Outlet />
      </main>
      <UiFooter
        groups={customLinkGroups}
        right={<SubscribeForm sx={{ maxWidth: "352px" }} />}
      />
    </Box>
  );
}

const linkGroups: GroupLinksType[] = [
  {
    title: "Stacks",
    links: [
      {
        title: "Discover",
        url: ROUTER_PATHS.DISCOVER,
      },
      {
        title: "Connect Wallet",
        url: ROUTER_PATHS.CONNECT_WALLET,
      },
      {
        title: "Create item",
        url: "",
      },
    ],
  },
  {
    title: "Info",
    links: [
      {
        title: "FAQ",
        url: ROUTER_PATHS.FAQ,
      },
      {
        title: "Demos",
        url: "",
      },
      {
        title: "Support",
        url: "",
      },
    ],
  },
];
