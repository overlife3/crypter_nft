import { useEffect, useState } from "react";
import { Category } from "./types";
import { Card, Token } from "@/entities/token";
import { Grid2 as Grid } from "@mui/material";
import { tokensMOCK } from "@/entities/token/MOCK";

type Props = {
  category: Category;
};

export const NftList = ({ category }: Props) => {
  const [nfts, setNfts] = useState<Token[]>([]);

  useEffect(() => {
    setNfts(tokensMOCK);
  }, [category]);

  return (
    <Grid container spacing={2}>
      {nfts.map((nft) => (
        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={nft.id}>
          <Card tokenData={nft} />
        </Grid>
      ))}
    </Grid>
  );
};
