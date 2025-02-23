import { Token } from "./model/types";
import imageUrl from "@/shared/assets/home-page/main.jpg";
import avatarUrl from "@/shared/assets/user-2.png";

const getToken = (id: string): Token => ({
  id: id,
  creator_id: "1",
  owner_id: "1",
  highest: {
    value: 0.456,
    currency: "ETH",
    natureChange: "increase",
  },
  imgUrl: imageUrl,
  isNovelty: true,
  name: "Name Token",
  price: {
    value: 2.324,
    currency: "ETH",
    natureChange: "increase",
  },
  stocks: [
    {
      img: avatarUrl,
      name: "User Name",
    },
    {
      img: avatarUrl,
      name: "User Name",
    },
    {
      img: avatarUrl,
      name: "User Name",
    },
  ],
});

const createTokensMOCK = (): Token[] => {
  const tokensArr = [];
  for (let i = 0; i < 30; i++) {
    tokensArr.push(getToken(`token_${i}`));
  }

  return tokensArr;
};

export const tokensMOCK = createTokensMOCK();
