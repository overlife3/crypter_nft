import { Components, Theme, typographyClasses } from "@mui/material";
import { gray } from "./theme-primitives";

export const surfaceCustomizations: Components<Theme> = {
  MuiAccordion: {
    styleOverrides: {
      root: () => ({
        padding: 0,
        backgroundColor: "transparent",
        boxShadow: "none",
        ":before": {
          backgroundColor: "transparent",
        },
        "&:not(:last-of-type)": {
          borderBottom: "none",
        },
        "&:first-of-type": {
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
        },
        "&:last-of-type": {
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
        },
      }),
    },
  },
  MuiAccordionSummary: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderBottom: `${gray[400]} 1px solid`,
        padding: 0,
        paddingBottom: "24px",
        "&:hover": { backgroundColor: gray[50] },
        "&:focus-visible": { backgroundColor: "transparent" },
        ...theme.applyStyles("dark", {
          "&:hover": { backgroundColor: gray[800] },
        }),
        [`& .${typographyClasses.root}`]: {
          fontSize: "1.14rem",
          lineHeight: "1.71rem",
        },
      }),
    },
  },
  MuiAccordionDetails: {
    styleOverrides: {
      root: () => ({
        fontFamily: "Poppins",
        padding: 0,
        paddingTop: "24px",
        fontSize: "1rem",
        color: gray[600],
      }),
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        padding: 12,
        gap: 20,
        transition: "all 100ms ease",
        backgroundColor: "transparent",
        borderRadius: 20,
        border: "none",
      },
    },
  },
  MuiCardContent: {
    styleOverrides: {
      root: {
        padding: 0,
        "&:last-child": { paddingBottom: 0 },
      },
    },
  },
  MuiCardHeader: {
    styleOverrides: {
      root: {
        padding: 0,
      },
    },
  },
  MuiCardActions: {
    styleOverrides: {
      root: {
        padding: 0,
      },
    },
  },
  MuiCardMedia: {
    styleOverrides: {
      root: {
        borderRadius: 16,
      },
    },
  },
};
