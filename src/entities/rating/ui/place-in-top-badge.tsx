import { brand, gray, violet } from "@/shared/theme/theme-primitives";
import {
  ElectricBolt,
  EmojiEventsOutlined,
  LocalFireDepartmentOutlined,
  StarBorder,
} from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { green } from "@mui/material/colors";

export const PlaceInTopBadge = ({ place }: { place: number }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "4px",
        backgroundColor: getColorForPlaceInTop(place),
        color: gray[50],
        borderRadius: "16px",
        padding: "2px 8px",
      }}
    >
      {getIconForPlaceInTop(place)}
      <Typography variant="caption2" sx={{ fontWeight: 600, fontSize: "12px" }}>
        #{place}
      </Typography>
    </Box>
  );
};

const getColorForPlaceInTop = (place: number) => {
  switch (place) {
    case 1:
      return brand[400];
    case 2:
      return violet[400];
    case 3:
      return green[400];
    default:
      return gray[800];
  }
};

const getIconForPlaceInTop = (place: number) => {
  switch (place) {
    case 1:
      return <EmojiEventsOutlined />;
    case 2:
      return <LocalFireDepartmentOutlined />;
    case 3:
      return <ElectricBolt />;
    default:
      return <StarBorder />;
  }
};
