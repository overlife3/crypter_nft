import { buyerData, sellerData } from "../MOCK";
import { BuyerRating, SellerRating, Timeframe } from "../model/types";

export const ratingRepository = {
  getBuyerRating: async (timeframe: Timeframe): Promise<BuyerRating[]> => {
    return await Promise.resolve(
      buyerData.filter((item) => item.timeframe === timeframe)
    );
  },
  getSellerRating: async (timeframe: Timeframe): Promise<SellerRating[]> => {
    return await Promise.resolve(
      sellerData.filter((item) => item.timeframe === timeframe)
    );
  },
};
