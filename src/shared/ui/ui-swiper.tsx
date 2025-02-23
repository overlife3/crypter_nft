import { Box, useTheme } from "@mui/material";
import { customAlphabet } from "nanoid";
import { Children, ReactNode, useState } from "react";
import { ArrowSwiper } from "./ui-arrow-swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { East, West } from "@mui/icons-material";

type Props = {
  children: ReactNode;
  slideWidth: string;
  slidesGap: number;
  slideHeight: number;
};

export const UiSwiper = ({
  children,
  slideWidth,
  slidesGap,
  slideHeight,
}: Props) => {
  const [isBeginning, setIsBeginning] = useState(true); // Начальное состояние
  const [isEnd, setIsEnd] = useState(false); // Начальное состояние
  const theme = useTheme();
  const slides = Children.toArray(children);

  const paddingBottom = 50;
  const swiperHeight = slideHeight + paddingBottom;

  const nanoid = customAlphabet("abcdef", 5);
  const id = nanoid();

  return (
    <Box sx={{ position: "relative", height: `${swiperHeight}px` }}>
      <Box
        component={"div"}
        sx={{
          position: "relative",

          display: "flex",
          justifyContent: "space-between",
          padding: "0px 50px 0 50px",
          [theme.breakpoints.down("md")]: {
            padding: 0,
          },
        }}
      >
        <ArrowSwiper
          sx={{
            position: "absolute",
            top: `${swiperHeight / 2}px`,
            zIndex: 3,
            transform: "translateY(-50%)",
            left: 0,
            [theme.breakpoints.down("md")]: {
              top: `${swiperHeight}px`,
              left: "50%",
              transform: "translateX(-110%)",
            },
          }}
          id={`${id}-prev`}
          disabled={isBeginning}
          icon={<West />}
        />

        <ArrowSwiper
          sx={{
            position: "absolute",
            top: `${swiperHeight / 2}px`,
            zIndex: 3,
            transform: "translateY(-50%)",
            right: 0,
            [theme.breakpoints.down("md")]: {
              top: `${swiperHeight}px`,
              left: "50%",
              transform: "translateX(110%)",
            },
          }}
          id={`${id}-next`}
          disabled={isEnd}
          icon={<East />}
        />
        <Swiper
          modules={[Navigation]}
          spaceBetween={slidesGap}
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
    </Box>
  );
};
