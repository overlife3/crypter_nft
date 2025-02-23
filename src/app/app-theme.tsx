import { createTheme, ThemeProvider } from "@mui/material";
import { ReactNode } from "react";
import {
  colorSchemes,
  typography,
  shadows,
  shape,
  breakpoints,
} from "@/shared/theme/theme-primitives";
import { dataDisplayCustomizations } from "@/shared/theme/data-display-customizations";
import { feedbackCustomizations } from "@/shared/theme/feedback-customizations";
import { surfaceCustomizations } from "@/shared/theme/surface-customizations";
import { inputCustomizations } from "@/shared/theme/inputs-customizations";
import { navigationCustomizations } from "@/shared/theme/navigation-customizations";

type AppThemeProps = {
  children: ReactNode;
};

export function AppTheme(props: AppThemeProps) {
  const { children } = props;

  const theme = createTheme({
    cssVariables: {
      colorSchemeSelector: "class",
      cssVarPrefix: "template",
    },
    colorSchemes,
    typography,
    shadows,
    shape,
    breakpoints,
    components: {
      ...dataDisplayCustomizations,
      ...feedbackCustomizations,
      ...surfaceCustomizations,
      ...inputCustomizations,
      ...navigationCustomizations,
    },
  });

  return (
    <ThemeProvider theme={theme} disableTransitionOnChange>
      {children}
    </ThemeProvider>
  );
}
