import { Box, SxProps, Theme, useTheme } from "@mui/material";
import clsx from "clsx";
import { ReactNode } from "react";
import { gray } from "@/shared/theme/theme-primitives";

type ArrowProps = {
  sx?: SxProps<Theme>;
  icon: ReactNode;
  id: string;
  disabled: boolean;
};

export const ArrowSwiper = ({ icon, id, disabled, sx }: ArrowProps) => {
  const theme = useTheme();
  const arrowSwiperCn = clsx(id, {
    ["disabled"]: disabled,
  });
  return (
    <Box
      className={arrowSwiperCn}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50%",
        width: "40px",
        height: "40px",
        color: gray[600],
        cursor: "pointer",
        border: `2px solid ${
          theme.palette.mode === "light" ? gray[400] : gray[700]
        }`,
        "&:hover": {
          borderColor: theme.palette.mode === "light" ? gray[500] : gray[600],
          color: theme.palette.mode === "light" ? gray[700] : gray[400],
        },
        "&.disabled": {
          border: "none",
          cursor: "default",
          "&:hover": {
            color: gray[600],
          },
        },
        "&.swiper-button-disabled": {
          border: "none",
          "&:hover": {
            color: gray[600],
          },
        },
        ...sx,
      }}
    >
      {icon}
    </Box>
  );
};
