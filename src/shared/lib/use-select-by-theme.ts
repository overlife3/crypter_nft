import { useTheme } from "@mui/material";

export const useSelectByTheme = () => {
  const themeColor = useTheme().palette.mode;

  return <T>(lightValue: T, darkValue: T): T => {
    if (themeColor === "light") return lightValue;
    else return darkValue;
  };
};
