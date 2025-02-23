import { Collection } from "@/entities/token-collection";
import { tokenCollectionDTO_MOCK } from "../../../entities/token-collection/api/MOCK";
import { tokensMOCK } from "@/entities/token/MOCK";
import { usersMOCK } from "@/entities/user/MOCK";
import { User } from "@/entities/user";

export const tokenCollectionRepository = {
  getCollections: async (): Promise<Collection[]> => {
    const collectionsDTO = await Promise.resolve(tokenCollectionDTO_MOCK);

    const collections: Collection[] = [];

    for (const collectionDTO of collectionsDTO) {
      collections.push({
        id: collectionDTO.id,
        owner: usersMOCK.find(
          (item) => item.id === collectionDTO.owner_id
        ) as User,
        title: collectionDTO.title,
        tokens: tokensMOCK.filter((item) =>
          collectionDTO.tokens_ids.includes(item.id)
        ),
      });
    }

    return collections;
  },
};
