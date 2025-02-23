import { CollectionCard } from "@/entities/token-collection";
import { UiWidgetSwiper } from "@/shared/ui/ui-widget-swiper";
import { useEffect } from "react";
import { useWidget } from "../model/widget.store";

export const HotCollectionWidget = () => {
  const { collections, loadCollections } = useWidget();

  useEffect(() => {
    const func = async () => {
      await loadCollections();
    };

    func();
  }, []);

  return (
    <UiWidgetSwiper title="Hot collections" slideWidth="352px">
      {collections.map((item) => (
        <CollectionCard
          data={{
            countItems: item.tokens.length,
            images_preview: item.tokens.slice(0, 4).map((item) => item.imgUrl),
            title: item.title,
            user: {
              avatar: item.owner.avatarUrl,
              name: item.owner.name,
            },
          }}
        />
      ))}
    </UiWidgetSwiper>
  );
};
