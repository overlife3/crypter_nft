import { Box, Typography } from "@mui/material";
import { Children, ReactNode, useState } from "react";
import { East, West } from "@mui/icons-material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { customAlphabet } from "nanoid";
import { ArrowSwiper } from "./ui-arrow-swiper";

type Props = {
  title: string;
  children: ReactNode;
  slideWidth: string;
};

export const UiWidgetSwiper = ({ title, children, slideWidth }: Props) => {
  const [isBeginning, setIsBeginning] = useState(true); // Начальное состояние
  const [isEnd, setIsEnd] = useState(false); // Начальное состояние
  const slides = Children.toArray(children);

  const nanoid = customAlphabet("abcdef", 5);
  const id = nanoid();

  return (
    <Box>
      <Box
        sx={{ display: "flex", justifyContent: "space-between", mb: "64px" }}
      >
        <Typography
          variant="h3"
          sx={{
            fontSize: "40px",
          }}
        >
          {title}
        </Typography>
        <Box sx={{ display: "flex", gap: "8px" }}>
          <ArrowSwiper
            id={`${id}-prev`}
            disabled={isBeginning}
            icon={<West />}
          />
          <ArrowSwiper id={`${id}-next`} disabled={isEnd} icon={<East />} />
        </Box>
      </Box>
      <Swiper
        modules={[Navigation]}
        spaceBetween={32}
        slidesPerView={"auto"}
        navigation={{
          nextEl: `.${id}-next`,
          prevEl: `.${id}-prev`,
        }}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        onInit={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} style={{ width: slideWidth }}>
            {slide}
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};
