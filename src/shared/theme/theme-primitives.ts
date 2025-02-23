import { createTheme, Shadows } from "@mui/material";

declare module "@mui/material/Paper" {
  interface PaperPropsVariantOverrides {
    highlighted: true;
  }
}

declare module "@mui/material/Button" {
  interface OverrideProps {
    neutral?: boolean; // Добавляем новый проп
  }
}

declare module "@mui/material/styles/createPalette" {
  interface ColorRange {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  }

  interface Palette {
    baseShadow: string;
  }
}

export const brand = {
  200: "#8ea5da",
  400: "#3772FF",
  700: "#2955bf",
};
export const gray = {
  50: "#FCFCFD",
  100: "#F2F3F6",
  200: "#F1F2F6",
  300: "#F4F5F6",
  400: "#E6E8EC",
  500: "#B1B5C3",
  600: "#777E90",
  700: "#353945",
  800: "#23262F",
  900: "#141416",
};

export const green = {
  200: "#a2d9b5",
  400: "#45B26B",
  700: "#235936",
};

export const orange = {
  200: "#ffe8b3",
  400: "#FFD166",
  700: "#806933",
};

export const red = {
  200: "#f7a3b7",
  400: "#EF466F",
  700: "#782338",
};

export const violet = {
  200: "#CDB4DB",
  400: "#9757D7",
  700: "#4c2c6c",
};

export const brown = {
  200: "#f2ebe7",
  400: "#E4D7CF",
  700: "#726c68",
};

export const colorSchemes = {
  light: {
    palette: {
      primary: {
        light: brand[200],
        main: brand[400],
        dark: brand[700],
        contrastText: "#fff",
      },
      info: {
        light: brand[200],
        main: brand[400],
        dark: brand[700],
        contrastText: "#fff",
      },
      warning: {
        light: orange[200],
        main: orange[400],
        dark: orange[700],
        contrastText: "#fff",
      },
      error: {
        light: red[200],
        main: red[400],
        dark: red[700],
        contrastText: "#fff",
      },
      success: {
        light: green[200],
        main: green[400],
        dark: green[700],
      },
      grey: {
        ...gray,
      },
      divider: gray[400],
      background: {
        default: gray[50],
        paper: gray[50],
      },
      text: {
        primary: gray[800],
        secondary: gray[600],
      },
    },
  },
  dark: {
    palette: {
      primary: {
        light: brand[200],
        main: brand[400],
        dark: brand[700],
        contrastText: "#fff",
      },
      info: {
        light: brand[200],
        main: brand[400],
        dark: brand[700],
        contrastText: "#fff",
      },
      warning: {
        light: orange[200],
        main: orange[400],
        dark: orange[700],
        contrastText: "#fff",
      },
      error: {
        light: red[200],
        main: red[400],
        dark: red[700],
        contrastText: "#fff",
      },
      success: {
        light: green[200],
        main: green[400],
        dark: green[700],
      },
      grey: {
        ...gray,
      },
      divider: gray[700],
      background: {
        default: gray[900],
        paper: gray[800],
      },
      text: {
        primary: gray[50],
        secondary: gray[600],
      },
    },
  },
};

export const typography = {
  fontFamily: '"DM Sans", "Poppins", sans-serif',
  h1: {
    fontFamily: '"DM Sans", "Poppins", sans-serif',
    fontWeight: 700,
    fontSize: "4rem",
    lineHeight: "4rem",
    letterSpacing: "-0.02em",
  },
  h2: {
    fontFamily: '"DM Sans", "Poppins", sans-serif',
    fontWeight: 700,
    fontSize: "3rem",
    lineHeight: "3.5rem",
    letterSpacing: "-0.02em",
  },
  h3: {
    fontFamily: '"DM Sans", "Poppins", sans-serif',
    fontWeight: 700,
    fontSize: "2.5rem",
    lineHeight: "3rem",
    letterSpacing: "-0.01em",
  },
  h4: {
    fontFamily: '"DM Sans", "Poppins", sans-serif',
    fontWeight: 700,
    fontSize: "2rem",
    lineHeight: "2.5rem",
    letterSpacing: "-0.01em",
  },
  body1: {
    fontFamily: '"Poppins", "DM Sans", sans-serif',
    fontWeight: 400,
    fontSize: "1.5rem",
    lineHeight: "2rem",
    letterSpacing: "-0.01em",
  },
  body2: {
    fontFamily: '"Poppins", "DM Sans", sans-serif',
    fontWeight: 400,
    fontSize: "1rem",
    lineHeight: "1.5rem",
    letterSpacing: "0em",
  },
  caption: {
    fontFamily: '"Poppins", "DM Sans", sans-serif',
    fontWeight: 400,
    fontSize: "0.875rem",
    lineHeight: "1.5rem",
    letterSpacing: "0em",
  },
  button: {
    fontFamily: '"DM Sans", "Poppins", sans-serif',
    fontWeight: 700,
    fontSize: "1rem",
    lineHeight: "1rem",
    letterSpacing: "0em",
  },
  hairline1: {
    fontFamily: '"Poppins", "DM Sans", sans-serif',
    fontWeight: 700,
    fontSize: "1rem",
    lineHeight: "1rem",
    letterSpacing: "0em",
  },
  hairline2: {
    fontFamily: '"Poppins", "DM Sans", sans-serif',
    fontWeight: 700,
    fontSize: "0.75rem",
    lineHeight: "0.75rem",
    letterSpacing: "0em",
  },
  button2: {
    fontFamily: '"Poppins", "DM Sans", sans-serif',
    fontWeight: 700,
    fontSize: "0.875rem",
    lineHeight: "1rem",
    letterSpacing: "0em",
  },
  hero: {
    fontFamily: '"DM Sans", "Poppins", sans-serif',
    fontWeight: 700,
    fontSize: "6rem",
    lineHeight: "6rem",
    letterSpacing: "-0.02em",
  },
  caption2: {
    fontFamily: '"Poppins", "DM Sans", sans-serif',
    fontWeight: 400,
    fontSize: "0.75rem",
    lineHeight: "1.25rem",
    letterSpacing: "0em",
  },
};

export const breakpoints = {
  values: {
    xs: 0, // Обычно 0px
    sm: 600, // Обычно 600px
    md: 900, // Обычно 900px
    lg: 1328, // Обычно 1200px
    xl: 1536, // Обычно 1536px
  },
};

export const shape = {
  borderRadius: 16,
};

const defaultTheme = createTheme();

const defaultShadows: Shadows = [
  "none",
  "hsla(220, 30%, 5%, 0.07) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.07) 0px 8px 16px -5px",
  ...defaultTheme.shadows.slice(2),
] as Shadows;

export const shadows = defaultShadows;
