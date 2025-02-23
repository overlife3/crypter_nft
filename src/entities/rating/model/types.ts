export type BuyerRating = User & {
  timeframe: Timeframe;
  cheque: {
    value: number;
    currency: "ETH";
  };
};

export type SellerRating = User & {
  timeframe: Timeframe;
  revenue: {
    value: number;
    currency: "ETH";
  };
};

type User = {
  user_id: string;
  avatar: string;
  name: string;
  place_in_top: number;
};

export type Timeframe = "1d" | "7d" | "30d";
