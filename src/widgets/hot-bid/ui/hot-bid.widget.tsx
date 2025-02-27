import { Card } from "@/entities/token/ui/card";
import img from "@/shared/assets/card.jpg";
import avatar from "@/shared/assets/user-1.png";
import { UiWidgetSwiper } from "@/shared/ui/ui-widget-swiper";
import { Box, SxProps, Theme } from "@mui/material";

type Props = {
  sx?: SxProps<Theme>;
};

export const HotBidWidget = ({ sx }: Props) => {
  return (
    <Box sx={{ ...sx }}>
      <UiWidgetSwiper title="Hot bid" slideWidth="256px">
        <Card
          tokenData={{
            creator_id: "1",
            id: "token_1",
            owner_id: "1",
            highest: {
              currency: "ETH",
              natureChange: "static",
              value: 0.001,
            },
            imgUrl: img,
            isNovelty: true,
            name: "Amazing digital art",
            price: {
              currency: "ETH",
              natureChange: "static",
              value: 2.45,
            },
            stocks: [
              { name: "Remy Sharp", img: avatar },
              { name: "Remy Sharp", img: avatar },
              { name: "Remy Sharp", img: avatar },
            ],
          }}
        />
        <Card
          tokenData={{
            creator_id: "1",
            id: "token_1",
            owner_id: "1",
            highest: {
              currency: "ETH",
              natureChange: "increase",
              value: 0.001,
            },
            imgUrl: img,
            isNovelty: true,
            name: "Amazing digital art",
            price: {
              currency: "ETH",
              natureChange: "increase",
              value: 2.45,
            },
            stocks: [{ name: "name", img: avatar }],
          }}
        />
        <Card
          tokenData={{
            creator_id: "1",
            id: "token_1",
            owner_id: "1",
            highest: {
              currency: "ETH",
              natureChange: "reduction",
              value: 0.001,
            },
            imgUrl: img,
            isNovelty: true,
            name: "Amazing digital art",
            price: {
              currency: "ETH",
              natureChange: "reduction",
              value: 2.45,
            },
            stocks: [{ name: "name", img: avatar }],
          }}
        />
        <Card
          tokenData={{
            creator_id: "1",
            id: "token_1",
            owner_id: "1",
            highest: {
              currency: "ETH",
              natureChange: "static",
              value: 0.001,
            },
            imgUrl: img,
            isNovelty: true,
            name: "Amazing digital art",
            price: {
              currency: "ETH",
              natureChange: "static",
              value: 2.45,
            },
            stocks: [
              { name: "Remy Sharp", img: avatar },
              { name: "Remy Sharp", img: avatar },
              { name: "Remy Sharp", img: avatar },
            ],
          }}
        />
        <Card
          tokenData={{
            creator_id: "1",
            id: "token_1",
            owner_id: "1",
            highest: {
              currency: "ETH",
              natureChange: "increase",
              value: 0.001,
            },
            imgUrl: img,
            isNovelty: true,
            name: "Amazing digital art",
            price: {
              currency: "ETH",
              natureChange: "increase",
              value: 2.45,
            },
            stocks: [{ name: "name", img: avatar }],
          }}
        />
        <Card
          tokenData={{
            creator_id: "1",
            id: "token_1",
            owner_id: "1",
            highest: {
              currency: "ETH",
              natureChange: "reduction",
              value: 0.001,
            },
            imgUrl: img,
            isNovelty: true,
            name: "Amazing digital art",
            price: {
              currency: "ETH",
              natureChange: "reduction",
              value: 2.45,
            },
            stocks: [{ name: "name", img: avatar }],
          }}
        />
      </UiWidgetSwiper>
    </Box>
  );
};
