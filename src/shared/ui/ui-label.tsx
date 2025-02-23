import { Box, Typography, useTheme } from "@mui/material";
import { gray, green, red } from "@/shared/theme/theme-primitives";

type Color = "green" | "white" | "red";

type Props = {
  color: Color;
  text: string;
};

export const UiLabel = ({ color, text }: Props) => {
  const theme = useTheme();
  const themeColor = theme.palette.mode;
  return (
    <Box
      sx={{
        border: `2px solid ${getBorderHEC(color)}`,
        color: getTextHEC(color, themeColor),
        padding: "6px",
        borderRadius: "4px",
      }}
    >
      <Typography variant="hairline2">{text}</Typography>
    </Box>
  );
};

const getBorderHEC = (color: Color) => {
  if (color === "green") return green[400];
  if (color === "red") return red[400];
  if (color === "white") return gray[400];
};

const getTextHEC = (color: Color, themeColor: "light" | "dark") => {
  let hec = null;

  if (themeColor === "light") {
    switch (color) {
      case "green":
        hec = green[400];
        break;
      case "red":
        hec = red[400];
        break;
      case "white":
        hec = gray[800];
    }
  }

  if (themeColor === "dark") {
    switch (color) {
      case "green":
        hec = green[400];
        break;
      case "red":
        hec = red[400];
        break;
      case "white":
        hec = gray[400];
    }
  }

  return hec;
};
