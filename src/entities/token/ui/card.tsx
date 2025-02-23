import { Token } from "@/entities/token";
import { gray, red } from "@/shared/theme/theme-primitives";
import { UiLabel } from "@/shared/ui/ui-label";
import {
  CandlestickChartOutlined,
  LocalFireDepartmentRounded,
} from "@mui/icons-material";
import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  SxProps,
  Theme,
  Typography,
} from "@mui/material";

type Props = { tokenData: Token; sx?: SxProps<Theme> };

export const Card = ({ tokenData, sx }: Props) => {
  return (
    <Box
      sx={{
        ...sx,
      }}
    >
      <Box mb={"20px"}>
        <img
          src={tokenData.imgUrl}
          alt="token preview"
          style={{
            width: "100%",
            height: "303px",
            borderRadius: "16px",
            objectPosition: "50% 50%",
            objectFit: "cover",
          }}
        />
      </Box>

      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "12px",
          }}
        >
          <Typography variant="body2" fontSize={"16px"}>
            {tokenData.name}
          </Typography>
          <UiLabel
            color={getColorForPriceByTokenPrice(tokenData.price.natureChange)}
            text={`${tokenData.price.value} ${tokenData.price.currency}`}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "12px",
          }}
        >
          <AvatarGroup max={4}>
            {tokenData.stocks.map((item, index) => (
              <Avatar
                sx={{ width: "24px", height: "24px" }}
                alt={item.name}
                src={item.img}
                key={index}
              />
            ))}
          </AvatarGroup>
          <Typography variant="caption" fontSize={"14px"}>
            {tokenData.stocks.length} in stock
          </Typography>
        </Box>
        <Divider sx={{ marginBottom: "12px" }} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", gap: "4px", alignItems: "center" }}>
            <CandlestickChartOutlined
              fontSize="large"
              sx={{
                color: gray[600],
              }}
            />
            <Typography variant="caption2" color={gray[600]}>
              Highest bid
            </Typography>

            <Typography variant="caption2" fontWeight={600}>
              {tokenData.highest.value} {tokenData.highest.currency}
            </Typography>
          </Box>
          {tokenData.isNovelty && (
            <Box sx={{ display: "flex", alignItems: "center", gap: "2px" }}>
              <Typography variant="caption2" color={gray[600]}>
                New bid
              </Typography>
              <LocalFireDepartmentRounded sx={{ color: red[400] }} />
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

const getColorForPriceByTokenPrice = (
  natureChange: "static" | "increase" | "reduction"
): "white" | "green" | "red" => {
  switch (natureChange) {
    case "static":
      return "white";
    case "increase":
      return "green";
    case "reduction":
      return "red";
  }
};
