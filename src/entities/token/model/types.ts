export type Token = {
  id: string;
  creator_id: string;
  owner_id: string;
  name: string;
  imgUrl: string;
  price: PriceRate;
  stocks: Follower[];
  highest: HighestRate;
  isNovelty: boolean;
};

type Follower = {
  name: string;
  img: string;
};

type PriceRate = Rate;
type HighestRate = Rate;
type Rate = {
  value: number;
  currency: "ETH";
  natureChange: "increase" | "reduction" | "static";
};
