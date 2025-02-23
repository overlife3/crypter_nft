import { gray } from "@/shared/theme/theme-primitives";
import { KeyboardArrowRight } from "@mui/icons-material";
import { Box, Divider, SxProps, Theme, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

type Props = {
  imgUrl: string;
  title: string;
  href: string;
  sx?: SxProps<Theme>;
};

export const BlockMobile = ({ imgUrl, title, href, sx }: Props) => {
  const navigate = useNavigate();
  return (
    <Box sx={sx}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          transition: "background-color .2s",
          mb: "32px",
          p: "10px",
          borderRadius: "16px",
          gap: "20px",
          cursor: "pointer",
          "&:hover": {
            backgroundColor: gray[100],
          },
        }}
      >
        <Box sx={{ width: "64px", height: "64px", flexShrink: 0 }}>
          <img src={imgUrl} style={{ width: "100%", borderRadius: "50%" }} />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "100%",
            width: "100%",
          }}
          onClick={() => navigate(href)}
        >
          <Typography variant="body2" sx={{ fontSize: "16px" }}>
            {title}
          </Typography>
          <KeyboardArrowRight sx={{ color: gray[600] }} />
        </Box>
      </Box>
      <Divider />
    </Box>
  );
};
