import { Token } from "@/entities/token";

export type User = {
  id: string;
  name: string;
  address_wallet: string;
  balance: Balance;
  portfolio: Token[];
  avatarUrl: string;
};

type Balance = {
  value: number;
  currency: "ETH";
};
