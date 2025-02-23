import { Components, svgIconClasses, Theme } from "@mui/material";
import { gray } from "./theme-primitives";

export const dataDisplayCustomizations: Components<Theme> = {
  MuiList: {
    styleOverrides: {
      root: {
        padding: 0,
        display: "flex",
        flexDirection: "column",
        gap: 0,
      },
    },
  },
  MuiChip: {
    styleOverrides: {
      root: {
        display: "flex",
        alignItems: "center",
        gap: 4,
        padding: "2px 8px",
        borderRadius: 24,
        fontWeight: 600,
        fontSize: "0.85rem",
        color: gray[50],
        [`& .${svgIconClasses.root}`]: {
          height: "1.14rem",
        },
      },
    },
  },
};
