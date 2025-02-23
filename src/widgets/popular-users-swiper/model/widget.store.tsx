import { create } from "zustand";
import {
  BuyerRating,
  ratingRepository,
  SellerRating,
  Timeframe,
} from "@/entities/rating";

export type WidgetStore = {
  category: Category;
  timeframe: Timeframe;
  popularSellers: SellerRating[];
  popularBuyer: BuyerRating[];
  setCategory: (item: Category) => void;
  setTimeframe: (item: Timeframe) => void;
  loadUsers: () => Promise<void>;
};

export type Category = "seller" | "buyer";

export const useWidget = create<WidgetStore>((set, get) => ({
  category: "seller",
  popularBuyer: [],
  popularSellers: [],
  timeframe: "1d",
  setCategory: (item) => {
    set({
      category: item,
    });
  },
  setTimeframe: (item) => {
    set({
      timeframe: item,
    });
  },
  loadUsers: async () => {
    set({
      popularBuyer: await ratingRepository.getBuyerRating(get().timeframe),
      popularSellers: await ratingRepository.getSellerRating(get().timeframe),
    });
  },
}));
