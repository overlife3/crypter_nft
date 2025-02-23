import { nanoid } from "nanoid";
import type { SellerRating, BuyerRating } from "./model/types";
import avatar from "@/shared/assets/user-2.png";

export const sellerData: SellerRating[] = [
  {
    user_id: nanoid(),
    avatar: avatar,
    name: "Seller Harris",
    place_in_top: 1,
    timeframe: "1d",
    revenue: {
      value: 2.456,
      currency: "ETH",
    },
  },
  {
    user_id: nanoid(),
    avatar: avatar,
    name: "Seller Harris",
    timeframe: "1d",
    place_in_top: 2,
    revenue: {
      value: 2.456,
      currency: "ETH",
    },
  },
  {
    user_id: nanoid(),
    avatar: avatar,
    name: "Seller Harris",
    timeframe: "1d",
    place_in_top: 3,
    revenue: {
      value: 2.456,
      currency: "ETH",
    },
  },
  {
    user_id: nanoid(),
    avatar: avatar,
    name: "Seller Harris",
    timeframe: "1d",
    place_in_top: 4,
    revenue: {
      value: 2.456,
      currency: "ETH",
    },
  },
  {
    user_id: nanoid(),
    avatar: avatar,
    name: "Seller Harris",
    timeframe: "1d",
    place_in_top: 5,
    revenue: {
      value: 2.456,
      currency: "ETH",
    },
  },
  {
    user_id: nanoid(),
    avatar: avatar,
    name: "Seller Harris",
    timeframe: "1d",
    place_in_top: 6,
    revenue: {
      value: 2.456,
      currency: "ETH",
    },
  },
  {
    user_id: nanoid(),
    avatar: avatar,
    name: "Seller Harris",
    timeframe: "1d",
    place_in_top: 7,
    revenue: {
      value: 2.456,
      currency: "ETH",
    },
  },
  {
    user_id: nanoid(),
    avatar: avatar,
    name: "Seller Harris",
    timeframe: "1d",
    place_in_top: 8,
    revenue: {
      value: 2.456,
      currency: "ETH",
    },
  },
];

export const buyerData: BuyerRating[] = [
  {
    user_id: nanoid(),
    avatar: avatar,
    name: "Buyer Harris",
    place_in_top: 1,
    timeframe: "1d",
    cheque: {
      value: 2.456,
      currency: "ETH",
    },
  },
  {
    user_id: nanoid(),
    avatar: avatar,
    name: "Buyer Harris",
    place_in_top: 2,
    timeframe: "1d",
    cheque: {
      value: 2.456,
      currency: "ETH",
    },
  },
  {
    user_id: nanoid(),
    avatar: avatar,
    name: "Buyer Harris",
    place_in_top: 3,
    timeframe: "1d",
    cheque: {
      value: 2.456,
      currency: "ETH",
    },
  },
  {
    user_id: nanoid(),
    avatar: avatar,
    name: "Buyer Harris",
    place_in_top: 4,
    timeframe: "1d",
    cheque: {
      value: 2.456,
      currency: "ETH",
    },
  },
  {
    user_id: nanoid(),
    avatar: avatar,
    name: "Buyer Harris",
    place_in_top: 5,
    timeframe: "1d",
    cheque: {
      value: 2.456,
      currency: "ETH",
    },
  },
  {
    user_id: nanoid(),
    avatar: avatar,
    name: "Buyer Harris",
    place_in_top: 6,
    timeframe: "1d",
    cheque: {
      value: 2.456,
      currency: "ETH",
    },
  },
  {
    user_id: nanoid(),
    avatar: avatar,
    name: "Buyer Harris",
    place_in_top: 7,
    timeframe: "1d",
    cheque: {
      value: 2.456,
      currency: "ETH",
    },
  },
  {
    user_id: nanoid(),
    avatar: avatar,
    name: "Buyer Harris",
    place_in_top: 8,
    timeframe: "1d",
    cheque: {
      value: 2.456,
      currency: "ETH",
    },
  },
  {
    user_id: nanoid(),
    avatar: avatar,
    name: "Buyer Harris",
    place_in_top: 9,
    timeframe: "1d",
    cheque: {
      value: 2.456,
      currency: "ETH",
    },
  },
];
