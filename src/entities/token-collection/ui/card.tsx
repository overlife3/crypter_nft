import {
  Avatar,
  Box,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";
import { UiLabel } from "@/shared/ui/ui-label";

type Props = {
  data: {
    images_preview: string[];
    title: string;
    user: {
      avatar: string;
      name: string;
    };
    countItems: number;
  };
};

export const CollectionCard = ({ data }: Props) => {
  const isOneImagePreview = data.images_preview.length === 1;
  const isTwoImagePreview = data.images_preview.length === 2;
  const isThreeImagePreview = data.images_preview.length === 3;
  const isFourImagePreview = data.images_preview.length >= 4;

  let countCols = 0;
  switch (data.images_preview.length) {
    case 1:
      countCols = 1;
      break;
    case 2:
      countCols = 1;
      break;
    case 3:
      countCols = 2;
      break;
    case 4:
      countCols = 3;
      break;
    default:
      countCols = 3;
  }

  return (
    <Box
      sx={{
        cursor: "pointer",
      }}
    >
      <ImageList
        sx={{
          width: "352px",
        }}
        variant="quilted"
        cols={countCols}
        rowHeight={isOneImagePreview || isTwoImagePreview ? 340 : 75}
        gap={8}
      >
        {isOneImagePreview && (
          <OneOrTwoImage imageUrl={data.images_preview[0]} />
        )}
        {isTwoImagePreview && (
          <OneOrTwoImage imageUrl={data.images_preview[0]} />
        )}
        {isThreeImagePreview && <ThreeImage imagesUrls={data.images_preview} />}
        {isFourImagePreview && <FourImage imagesUrls={data.images_preview} />}
      </ImageList>
      <Typography component={"p"} variant="body1" fontSize="24px" mb={"8px"}>
        {data.title}
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Avatar src={data.user.avatar} />
          <Typography variant="caption" fontSize={"14px"}>
            By {data.user.name}
          </Typography>
        </Box>
        <UiLabel color="white" text={`${data.countItems} ITEMS`} />
      </Box>
    </Box>
  );
};

const OneOrTwoImage = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <ImageListItem cols={1} rows={1}>
      <img style={{ borderRadius: "8px" }} src={imageUrl} loading="lazy" />
    </ImageListItem>
  );
};

const ThreeImage = ({ imagesUrls }: { imagesUrls: string[] }) => {
  return (
    <>
      <ImageListItem cols={2} rows={3.2}>
        <img
          style={{ borderRadius: "8px" }}
          src={imagesUrls[0]}
          loading="lazy"
        />
      </ImageListItem>
      <ImageListItem cols={1} rows={1}>
        <img
          style={{ borderRadius: "8px" }}
          src={imagesUrls[1]}
          loading="lazy"
        />
      </ImageListItem>
      <ImageListItem cols={1} rows={1}>
        <img
          style={{ borderRadius: "8px" }}
          src={imagesUrls[2]}
          loading="lazy"
        />
      </ImageListItem>
    </>
  );
};

const FourImage = ({ imagesUrls }: { imagesUrls: string[] }) => {
  return (
    <>
      <ImageListItem cols={3} rows={3.2}>
        <img
          style={{ borderRadius: "8px" }}
          src={imagesUrls[0]}
          loading="lazy"
        />
      </ImageListItem>
      <ImageListItem cols={1} rows={1}>
        <img
          style={{ borderRadius: "8px" }}
          src={imagesUrls[1]}
          loading="lazy"
        />
      </ImageListItem>
      <ImageListItem cols={1} rows={1}>
        <img
          style={{ borderRadius: "8px" }}
          src={imagesUrls[2]}
          loading="lazy"
        />
      </ImageListItem>
      <ImageListItem cols={1} rows={1}>
        <img
          style={{ borderRadius: "8px" }}
          src={imagesUrls[3]}
          loading="lazy"
        />
      </ImageListItem>
    </>
  );
};
