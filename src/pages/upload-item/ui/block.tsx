import { useSelectByTheme } from "@/shared/lib/use-select-by-theme";
import { gray } from "@/shared/theme/theme-primitives";
import { Box, SxProps, Theme } from "@mui/material";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  imgUrl: string;
  sx?: SxProps<Theme>;
};

export const Block = ({ children, imgUrl, sx }: Props) => {
  const selectByTheme = useSelectByTheme();
  return (
    <Box
      sx={{
        border: `1px solid ${selectByTheme(gray[400], gray[700])}`,
        padding: "16px 16px 24px 16px",
        borderRadius: "16px",
        ...sx,
      }}
    >
      <img
        src={imgUrl}
        style={{
          width: "100%",
          height: "auto",
          marginBottom: "24px",
          borderRadius: "10px",
        }}
      />
      <Box sx={{ display: "flex", justifyContent: "center" }}>{children}</Box>
    </Box>
  );
};
