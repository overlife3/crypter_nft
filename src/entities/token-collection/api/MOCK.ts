import { CollectionDTO } from "@/entities/token-collection";

export const tokenCollectionDTO_MOCK: CollectionDTO[] = [
  {
    id: "collection_1",
    creator_id: "user_1",
    owner_id: "user_1",
    title: "Awesome collection",
    tokens_ids: ["token_1", "token_2", "token_3", "token_4"],
  },
  {
    id: "collection_2",
    creator_id: "user_1",
    owner_id: "user_1",
    title: "Awesome collection",
    tokens_ids: ["token_5", "token_6"],
  },
  {
    id: "collection_3",
    creator_id: "user_2",
    owner_id: "user_2",
    title: "Awesome collection",
    tokens_ids: ["token_7", "token_8", "token_9"],
  },
  {
    id: "collection_4",
    creator_id: "user_3",
    owner_id: "user_3",
    title: "Awesome collection",
    tokens_ids: ["token_10"],
  },
  {
    id: "collection_5",
    creator_id: "user_4",
    owner_id: "user_4",
    title: "Awesome collection",
    tokens_ids: ["token_11", "token_12", "token_13", "token_14", "token_15"],
  },
  {
    id: "collection_6",
    creator_id: "user_1",
    owner_id: "user_1",
    title: "Awesome collection",
    tokens_ids: ["token_16", "token_17", "token_18"],
  },
];
