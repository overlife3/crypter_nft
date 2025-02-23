import { KeyboardArrowDown } from "@mui/icons-material";
import {
  alpha,
  Components,
  menuItemClasses,
  selectClasses,
  SvgIconProps,
  tabClasses,
  Theme,
} from "@mui/material";
import { forwardRef } from "react";
import { brand, gray } from "./theme-primitives";
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from "react-router-dom";

const LinkBehavior = forwardRef<
  HTMLAnchorElement,
  Omit<RouterLinkProps, "to"> & { href: RouterLinkProps["to"] }
>((props, ref) => {
  const { href, ...other } = props;
  // Map href (Material UI) -> to (react-router)
  return <RouterLink ref={ref} to={href} {...other} />;
});

export const navigationCustomizations: Components<Theme> = {
  MuiMenuItem: {
    styleOverrides: {
      root: ({ theme }) => ({
        fontSize: "0.875rem",
        fontWeight: 700,
        color: gray[600],
        padding: "0 8px",
        borderRadius: "4px",
        fontFamily: theme.typography.button.fontFamily,
        [`&.${menuItemClasses.focusVisible}`]: {
          backgroundColor: "transparent",
        },
        [`&.${menuItemClasses.selected}`]: {
          [`&.${menuItemClasses.focusVisible}`]: {
            backgroundColor: alpha(theme.palette.action.selected, 0.3),
          },
        },
      }),
    },
  },
  MuiMenu: {
    styleOverrides: {
      list: {
        padding: "8px",
        gap: 0,
      },
      paper: ({ theme }) => ({
        marginTop: "4px",
        borderRadius: "12px",
        border: "none",
        boxShadow: theme.shadows[1],
      }),
    },
  },
  MuiSelect: {
    defaultProps: {
      IconComponent: forwardRef<SVGSVGElement, SvgIconProps>((props, ref) => (
        <KeyboardArrowDown {...props} ref={ref} />
      )),
    },
    styleOverrides: {
      root: () => ({
        // marginRight: 40,
        [`&.${selectClasses.focused}`]: {
          borderColor: gray[400],
        },
        "&:before, &:after": {
          display: "none",
        },
      }),
      select: {
        display: "flex",
        alignItems: "center",
      },
    },
  },
  MuiLink: {
    defaultProps: {
      underline: "none",
      component: LinkBehavior,
    },
    styleOverrides: {
      root: ({ theme }) => ({
        fontFamily: theme.typography.button.fontFamily,
        fontWeight: 700,
        lineHeight: "1rem",
        fontSize: "0.875rem",
        color: gray[800],
        "&:hover": {
          color: brand[400],
        },
      }),
    },
  },
  MuiTabs: {
    styleOverrides: {
      root: { minHeight: "fit-content" },
      indicator: () => ({
        display: "none",
      }),
    },
  },
  MuiTab: {
    styleOverrides: {
      root: ({ theme }) => ({
        padding: "6px 12px",
        marginBottom: "8px",
        textTransform: "none",
        minWidth: "fit-content",
        minHeight: "fit-content",
        fontSize: "0.875rem",
        color: gray[600],
        borderRadius: 100,
        border: "1px solid",
        borderColor: "transparent",
        ":hover": {
          color: theme.palette.text.primary,
          backgroundColor: gray[100],
          borderColor: gray[200],
        },
        [`&.${tabClasses.selected}`]: {
          color: gray[50],
          backgroundColor: gray[700],
        },
        ...theme.applyStyles("dark", {
          color: gray[600],
          ":hover": {
            color: theme.palette.text.primary,
            backgroundColor: gray[800],
            borderColor: gray[700],
          },
          [`&.${tabClasses.selected}`]: {
            color: gray[800],
            backgroundColor: gray[400],
          },
        }),
      }),
    },
  },
};
