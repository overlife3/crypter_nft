import { alpha, Components, Theme } from "@mui/material";
import { gray } from "./theme-primitives";

export const feedbackCustomizations: Components<Theme> = {
  MuiDialog: {
    styleOverrides: {
      root: () => ({
        [`& .MuiBackdrop-root`]: {
          backgroundColor: alpha(gray[900], 0.9),
          transition: "opacity 225ms cubic-bezier(0.4, 0, 0.2, 0.9) !important",
        },
        [`& .MuiDialog-paper`]: {
          borderRadius: "20px",
        },
      }),
    },
  },
};
