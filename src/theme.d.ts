// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ButtonProps } from "@mui/material/Button";

declare module "@mui/material/Button" {
  interface ButtonOwnProps {
    neutral?: boolean; // Добавляем новый пропс
  }
}

declare module "@mui/material/styles" {
  interface TypographyVariants {
    hairline1: CSSProperties;
    hairline2: CSSProperties;
    button2: CSSProperties;
    hero: CSSProperties;
    caption2: CSSProperties;
  }

  interface TypographyVariantsOptions {
    hairline1?: CSSProperties;
    hairline2?: CSSProperties;
    button2?: CSSProperties;
    hero?: CSSProperties;
    caption2?: CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    hairline1: CSSProperties;
    hairline2: CSSProperties;
    button2: CSSProperties;
    hero: CSSProperties;
    caption2: CSSProperties;
  }
}
