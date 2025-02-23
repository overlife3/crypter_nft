import { buyerData, sellerData } from "../../../entities/rating/MOCK";
import { BuyerRating, SellerRating } from "@/entities/rating";

export const widgetRepository = {
  getSellers: async (): Promise<SellerRating[]> => {
    return await Promise.resolve(sellerData);
  },
  getBuyers: async (): Promise<BuyerRating[]> => {
    return await Promise.resolve(buyerData);
  },
};
