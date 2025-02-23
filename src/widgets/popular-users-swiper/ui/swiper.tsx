import { useEffect } from "react";
import { Category, useWidget } from "../model/widget.store";
import { Box } from "@mui/material";
import { UiSwiper } from "@/shared/ui/ui-swiper";
import { BuyerRating, SellerRating } from "@/entities/rating";
import { BuyerCard, SellerCard } from "@/entities/rating";

export const PopularUsersSwiper = () => {
  const { popularSellers, popularBuyer, category, loadUsers } = useWidget();

  useEffect(() => {
    const func = async () => {
      await loadUsers();
    };
    func();
  }, []);

  return (
    <Box>
      <UiSwiper slideWidth="228px" slidesGap={4} slideHeight={250}>
        {getCardsByCategory(category, popularBuyer, popularSellers)}
      </UiSwiper>
    </Box>
  );
};

const getCardsByCategory = (
  category: Category,
  popularBuyer: BuyerRating[],
  popularSellers: SellerRating[]
) => {
  switch (category) {
    case "buyer":
      return popularBuyer.map((item) => (
        <BuyerCard data={item} key={item.user_id} />
      ));
    case "seller":
      return popularSellers.map((item) => (
        <SellerCard data={item} key={item.user_id} />
      ));
  }
  return null;
};
