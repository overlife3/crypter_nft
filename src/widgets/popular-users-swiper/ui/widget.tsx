import { Box } from "@mui/material";
import { SelectCategory } from "./select-category";
import { SelectTimeframe } from "./select-timeframe";
import { PopularUsersSwiper } from "./swiper";

export const PopularUsersWidget = () => {
  return (
    <Box>
      <Box
        sx={{ display: "flex", justifyContent: "space-between", mb: "64px" }}
      >
        <SelectCategory />
        <SelectTimeframe />
      </Box>
      <Box>
        <PopularUsersSwiper />
      </Box>
    </Box>
  );
};
