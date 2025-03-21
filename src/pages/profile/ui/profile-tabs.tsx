import { Category, NftList } from "@/widgets/nft-list";
import { Box, SxProps, Tab, Tabs, Theme } from "@mui/material";
import { useState } from "react";

const TABS = [
  { label: "On Sale", value: "on-sale" },
  { label: "Collectibles", value: "collectibles" },
  { label: "Created", value: "created" },
  { label: "Likes", value: "likes" },
  { label: "Following", value: "following" },
  { label: "Followers", value: "followers" },
];

type Props = {
  sx?: SxProps<Theme>;
};

export const ProfileTabs = ({ sx }: Props) => {
  const [activeTab, setActiveTab] = useState("on-sale");

  return (
    <Box sx={{ width: "100%", ...sx }}>
      {/* <Swiper slidesPerView={"auto"} modules={[Navigation]}>
        <SwiperSlide style={{ width: "100vw" }}> */}
      <Tabs
        value={activeTab}
        onChange={(_, newValue) => setActiveTab(newValue)}
        variant="scrollable"
        scrollButtons="auto"
        sx={{ maxWidth: "100vw" }}
        centered
      >
        {TABS.map((tab) => (
          <Tab key={tab.value} label={tab.label} value={tab.value} />
        ))}
      </Tabs>
      {/* </SwiperSlide>
      </Swiper> */}

      <Box mt={2}>
        {["on-sale", "collectibles", "created", "likes"].includes(
          activeTab
        ) && <NftList category={activeTab as Category} />}
        {/* {["following", "followers"].includes(activeTab) && <UserList category={activeTab} />} */}
      </Box>
    </Box>
  );
};
