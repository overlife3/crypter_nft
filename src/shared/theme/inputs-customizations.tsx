import { alpha, Components, outlinedInputClasses, Theme } from "@mui/material";
import { brand, gray, green, red } from "./theme-primitives";
import { CheckBoxOutlineBlank, Done } from "@mui/icons-material";

export const inputCustomizations: Components<Theme> = {
  MuiButtonBase: {
    defaultProps: {
      disableRipple: true,
      disableTouchRipple: true,
    },
    styleOverrides: {
      root: ({ theme }) => ({
        boxSizing: "border-box",
        transition: "all 100ms ease-in",
        "&:focus-visible": {
          outline: `3px solid ${alpha(theme.palette.primary.main, 0.5)}`,
          outlineOffset: "2px",
        },
      }),
    },
  },
  MuiButton: {
    styleOverrides: {
      root: ({ theme }) => ({
        boxShadow: "none",
        borderRadius: 90,
        textTransform: "none",
        border: "none",
        variants: [
          {
            props: {
              size: "small",
            },
            style: {
              fontSize: "0.875rem",
              padding: "8px 12px",
            },
          },
          {
            props: {
              size: "medium",
            },
            style: {
              fontSize: "0.875rem",
              padding: "12px 16px",
            },
          },
          {
            props: {
              size: "large",
            },
            style: {
              fontSize: "1rem",
              padding: "16px 24px",
            },
          },
          {
            props: {
              neutral: true,
            },
            style: {
              backgroundColor: brand[400],
              color: gray[50],
              "&:hover": {
                backgroundColor: brand[700],
              },
              "&:disabled": {
                backgroundColor: brand[200],
                color: gray[50],
              },
            },
          },
          {
            props: {
              neutral: undefined,
            },
            style: {
              backgroundColor: "transparent",
              color: gray[800],
              border: `2px solid ${gray[400]}`,
              "&:hover": {
                backgroundColor: gray[800],
                border: `2px solid ${gray[800]}`,
                color: gray[50],
                boxShadow: "none",
              },
              "&:disabled": {
                backgroundColor: gray[800],
                opacity: 0.5,
                color: gray[50],
                border: `2px solid ${gray[800]}`,
              },
              ...theme.applyStyles("dark", {
                backgroundColor: "transparent",
                color: gray[50],
                border: `2px solid ${gray[700]}`,
                "&:hover": {
                  backgroundColor: gray[50],
                  color: gray[800],
                  border: `2px solid ${gray[50]}`,
                  boxShadow: "none",
                },
                "&:disabled": {
                  backgroundColor: gray[50],
                  opacity: 0.5,
                  color: gray[800],
                  border: `2px solid ${gray[50]}`,
                },
              }),
            },
          },
          {
            props: {
              neutral: false,
            },
            style: {
              backgroundColor: "transparent",
              color: gray[800],
              border: `2px solid ${gray[700]}`,
              "&:hover": {
                backgroundColor: gray[800],
                border: `2px solid ${gray[800]}`,
                color: gray[50],
                boxShadow: "none",
              },
              "&:disabled": {
                backgroundColor: gray[800],
                opacity: 0.5,
                color: gray[50],
                border: `2px solid ${gray[800]}`,
              },
              ...theme.applyStyles("dark", {
                backgroundColor: "transparent",
                color: gray[50],
                border: `2px solid ${gray[400]}`,
                "&:hover": {
                  backgroundColor: gray[50],
                  color: gray[800],
                  border: `2px solid ${gray[50]}`,
                  boxShadow: "none",
                },
                "&:disabled": {
                  backgroundColor: gray[50],
                  opacity: 0.5,
                  color: gray[800],
                  border: `2px solid ${gray[50]}`,
                },
              }),
            },
          },
        ],
      }),
    },
  },
  MuiCheckbox: {
    defaultProps: {
      disableRipple: true,
      icon: <CheckBoxOutlineBlank sx={{ fontSize: 32 }} />,
      checkedIcon: <Done sx={{ width: 16, fontWeight: 600 }} />,
    },
    styleOverrides: {
      root: ({ theme }) => ({
        color: gray[400],
        padding: 0,
        margin: 12,
        width: 24,
        height: 24,
        borderRadius: 4,

        "&.Mui-focusVisible": {
          outline: `3px solid ${alpha(brand[400], 0.5)}`,
          outlineOffset: "2px",
          borderColor: brand[400],
        },
        "&.Mui-checked": {
          color: "white",
          backgroundColor: brand[400],
          borderColor: brand[400],
          boxShadow: `none`,
          "&:hover": {
            backgroundColor: brand[700],
          },
        },

        ...theme.applyStyles("dark", {
          color: gray[800],
          backgroundColor: gray[700],
        }),
      }),
    },
  },
  MuiInputBase: {
    styleOverrides: {
      root: {
        fontSize: "1rem",
        fontWeight: 400,
      },
      input: {
        // marginTop: "12px",
        "&::placeholder": {
          color: gray[600],
          fontWeight: 400,
          opacity: 1,
        },
      },
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      notchedOutline: {
        border: "none",
      },
      input: {
        padding: 0,
      },
      root: ({ theme }) => ({
        padding: "12px 16px",
        color: gray[800],
        borderRadius: 12,
        border: `2px solid`,
        borderColor: gray[400],

        ...theme.applyStyles("dark", {
          borderColor: gray[700],
          color: gray[50],
        }),

        [`&.${outlinedInputClasses.focused}`]: {
          borderColor: brand[400],
        },
        variants: [
          {
            props: {
              color: "success",
            },
            style: {
              borderColor: `${green[400]} !important`,
            },
          },
          {
            props: {
              color: "error",
            },
            style: {
              borderColor: `${red[400]} !important`,
              color: `${red[400]} !important`,
            },
          },
        ],
      }),
    },
  },
  MuiFormLabel: {
    styleOverrides: {
      root: () => ({
        fontSize: "0.857rem",
        color: gray[500],
        textTransform: "uppercase",
        fontWeight: 700,
        // marginBottom: "12px",
      }),
    },
  },
  MuiSwitch: {
    styleOverrides: {
      root: ({ theme }) => ({
        width: 48,
        height: 24,
        padding: 0,

        "& .MuiSwitch-switchBase": {
          padding: 0,
          margin: 4,
          transitionDuration: "200ms",

          "&.Mui-checked": {
            transform: "translateX(24px)",
            color: gray[50],

            ".MuiSwitch-thumb": {
              backgroundColor: gray[50],
            },

            "& + .MuiSwitch-track": {
              backgroundColor: brand[400],
              opacity: 1,
              border: 0,
            },
            "&.Mui-disabled + .MuiSwitch-track": {
              opacity: 0.5,
            },
          },
          "&.Mui-focusVisible .MuiSwitch-thumb": {
            color: "#33cf4d",
            border: "6px solid #fff",
          },
          "&.Mui-disabled .MuiSwitch-thumb": {
            color: theme.palette.grey[100],
            ...theme.applyStyles("dark", {
              color: theme.palette.grey[600],
            }),
          },
          "&.Mui-disabled + .MuiSwitch-track": {
            opacity: 0.7,

            ...theme.applyStyles("dark", {
              opacity: 0.3,
            }),
          },
        },
        "& .MuiSwitch-thumb": {
          boxSizing: "border-box",
          backgroundColor: brand[400],
          width: 16,
          height: 16,
        },
        "& .MuiSwitch-track": {
          borderRadius: 26 / 2,
          backgroundColor: gray[400],
          opacity: 1,
          transition: theme.transitions.create(["background-color"], {
            duration: 500,
          }),
          ...theme.applyStyles("dark", {
            backgroundColor: gray[700],
          }),
        },
      }),
    },
  },
};
