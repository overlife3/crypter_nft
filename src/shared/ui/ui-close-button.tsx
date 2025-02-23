import { Box, SxProps, Theme, useTheme } from "@mui/material";
import { gray } from "../theme/theme-primitives";
import { Close } from "@mui/icons-material";

type Props = {
  onClick: () => void;
  sx?: SxProps<Theme>;
};

export const UiCloseButton = ({ onClick, sx }: Props) => {
  const themeColor = useTheme().palette.mode;
  return (
    <Box
      component="button"
      sx={{
        width: "40px",
        height: "40px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: `2px solid`,
        borderColor: gray[400],
        borderRadius: "50%",
        cursor: "pointer",
        backgroundColor: "transparent",
        "&:hover": {
          borderColor: themeColor === "light" ? gray[500] : gray[600],
          color: themeColor === "light" ? gray[500] : gray[600],
        },
        ...sx,
      }}
      onClick={onClick}
    >
      <Close />
    </Box>
  );
};
