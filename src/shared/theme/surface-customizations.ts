import { Components, Theme, typographyClasses } from "@mui/material";
import { gray } from "./theme-primitives";

export const surfaceCustomizations: Components<Theme> = {
  MuiAccordion: {
    styleOverrides: {
      root: () => ({
        padding: 0,
        backgroundColor: "transparent",
        backgroundImage: "none",

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
        borderBottom: `1px solid`,
        borderColor: gray[400],
        padding: 0,
        paddingBottom: "24px",
        transition: "border-color .2s",

        "&.Mui-expanded": {
          borderColor: "transparent",
          // paddingBottom: 0,
        },
        "&:focus-visible": {
          backgroundColor: "transparent",
        },
        ...theme.applyStyles("dark", {
          borderColor: gray[700],
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
      root: ({ theme }) => ({
        fontFamily: "Poppins",
        padding: 0,
        paddingBottom: "24px",
        fontSize: "1rem",
        color: gray[600],
        borderBottom: `1px solid`,
        borderColor: gray[400],
        ...theme.applyStyles("dark", {
          borderColor: gray[700],
        }),
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
