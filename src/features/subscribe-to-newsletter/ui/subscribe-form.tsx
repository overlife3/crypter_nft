import { UiLineForm } from "@/shared/ui/ui-line-form";
import { Box, SxProps, Theme, Typography } from "@mui/material";

type Props = {
  sx?: SxProps<Theme>;
};

export const SubscribeForm = ({ sx }: Props) => {
  return (
    <Box sx={sx}>
      <Typography
        component={"h3"}
        variant="body2"
        sx={{
          fontSize: "16px",
          mb: "40px",
        }}
      >
        Join Newsletter
      </Typography>
      <Typography
        component="p"
        variant="caption"
        sx={{ fontSize: "14px", mb: "24px" }}
      >
        Subscribe our newsletter to get more free design course and resource
      </Typography>
      <UiLineForm label="Enter your email" />
    </Box>
  );
};
