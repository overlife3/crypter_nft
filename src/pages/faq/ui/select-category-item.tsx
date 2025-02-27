import { useSelectByTheme } from "@/shared/lib/use-select-by-theme";
import { gray } from "@/shared/theme/theme-primitives";
import { Box, Typography } from "@mui/material";
import { ReactNode } from "react";

export const SelectCategoryItem = ({
  onClick,
  icon,
  text,
  selected,
}: {
  onClick: () => void;
  icon: ReactNode;
  text: string;
  selected: boolean;
}) => {
  const selectByTheme = useSelectByTheme();

  return (
    <Box
      sx={{
        display: "flex",
        color: selected ? selectByTheme(gray[700], gray[500]) : gray[600],
        gap: "16px",
        alignItems: "center",
        px: "12px",
        py: "8px",
        borderRadius: "4px",
        cursor: "pointer",

        backgroundColor: selected
          ? selectByTheme(gray[100], gray[700])
          : "transparent",
        "&:hover": {
          color: selectByTheme(gray[700], gray[500]),
          backgroundColor: selectByTheme(gray[100], gray[700]),
        },
      }}
      onClick={onClick}
    >
      {icon}
      <Typography variant="button2" sx={{ fontWeight: 600, fontSize: "14px" }}>
        {text}
      </Typography>
    </Box>
  );
};
