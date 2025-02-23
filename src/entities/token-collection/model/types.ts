export type Collection = {
  id: string;
  title: string;
  owner: {
    id: string;
    name: string;
    avatarUrl: string;
  };
  tokens: {
    id: string;
    name: string;
    imgUrl: string;
  }[];
};
