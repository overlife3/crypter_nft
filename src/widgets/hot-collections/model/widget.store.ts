import { Collection } from "@/entities/token-collection";
import { tokenCollectionRepository } from "@/features/token-collection-list";
import { create } from "zustand";

type WidgetStore = {
  collections: Collection[];
  loadCollections: () => Promise<void>;
};

export const useWidget = create<WidgetStore>((set) => ({
  collections: [],
  loadCollections: async () => {
    set({
      collections: await tokenCollectionRepository.getCollections(),
    });
  },
}));
