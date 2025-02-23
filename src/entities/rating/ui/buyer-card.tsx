import { gray } from "@/shared/theme/theme-primitives";
import { Box, Divider, styled, Typography, useTheme } from "@mui/material";
import { BuyerRating } from "../model/types";
import { AddCircleOutline, NorthEast } from "@mui/icons-material";
import shadows from "@mui/material/styles/shadows";
import { PlaceInTopBadge } from "./place-in-top-badge";

type Props = {
  data: BuyerRating;
};

export const BuyerCard = ({ data }: Props) => {
  const themeColor = useTheme().palette.mode;
  return (
    <Box
      sx={{
        backgroundColor: themeColor === "light" ? gray[50] : gray[900],
        borderRadius: "16px",
        padding: "24px",
        boxShadow: shadows[3],
        transition: "box-shadow .5s",
        margin: "14px",
        "&:hover": {
          boxShadow: shadows[8],
        },
        "&:hover .avatar": {
          width: "80px",
          height: "80px",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "24px",
        }}
      >
        <PlaceInTopBadge place={data.place_in_top} />
        <Box>
          <AddCircleOutlineCustom sx={{ mr: "8px" }} />
          <NorthEastCustom />
        </Box>
      </Box>

      <Divider sx={{ marginBottom: "24px" }} />
      <Box
        className="avatar"
        sx={{
          borderRadius: "50%",
          width: "64px",
          height: "64px",
          overflow: "hidden",
          marginX: "auto",
          transition: "height .7s, width .7s",
          mb: "16px",
          "& img": {
            transition: "height .7s,  width .7s",
          },
        }}
      >
        <img
          style={{ width: "100%", height: "100%" }}
          src={data.avatar}
          alt={data.name}
        />
      </Box>

      <Typography
        component={"p"}
        textAlign={"center"}
        variant="caption"
        fontSize={"14px"}
        fontWeight={600}
      >
        {data.name}
      </Typography>
      <Box mx={"auto"} width={"min-content"}>
        <Typography
          variant="caption2"
          component="span"
          fontSize={"12px"}
          fontWeight={600}
          mr={"4px"}
        >
          {data.cheque.value}
        </Typography>
        <Typography
          variant="caption2"
          component="span"
          fontSize={"12px"}
          color={gray[600]}
          fontWeight={400}
        >
          {data.cheque.currency}
        </Typography>
      </Box>
    </Box>
  );
};

const AddCircleOutlineCustom = styled(AddCircleOutline)(({ theme }) => ({
  cursor: "pointer",
  color: gray[600],
  "&:hover": {
    color: theme.palette.mode === "light" ? gray[700] : gray[500],
  },
}));

const NorthEastCustom = styled(NorthEast)(({ theme }) => ({
  cursor: "pointer",
  color: gray[600],
  "&:hover": {
    color: theme.palette.mode === "light" ? gray[700] : gray[500],
  },
}));
