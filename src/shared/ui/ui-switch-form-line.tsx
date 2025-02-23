import { Box, Switch, Typography } from "@mui/material";
import { gray } from "../theme/theme-primitives";

export const UiSwitchFormLine = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <Box sx={{ display: "flex" }}>
      <Box sx={{ width: "100%" }}>
        <Typography variant="body2" sx={{ fontWeight: 600, fontSize: "16px" }}>
          {title}
        </Typography>
        <Typography
          variant="caption2"
          sx={{ fontSize: "12px", color: gray[600] }}
        >
          {subtitle}
        </Typography>
      </Box>
      <Switch />
    </Box>
  );
};
