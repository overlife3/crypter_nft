import { tokensMOCK } from "../token/MOCK";
import { User } from "./model/types";
import avatarUrl from "@/shared/assets/user-2.png";

const createUser = (id: string): User => {
  return {
    id,
    name: "User Name",
    address_wallet: "address_wallet",
    avatarUrl: avatarUrl,
    balance: {
      value: 2.342,
      currency: "ETH",
    },
    portfolio: tokensMOCK.filter((item) => item.id === id),
  };
};

const createUsersMOCK = (): User[] => {
  const users = [];
  for (let i = 1; i < 8; i++) {
    users.push(createUser(`user_${i}`));
  }
  return users;
};

export const usersMOCK: User[] = createUsersMOCK();
