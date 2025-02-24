import { ArrowRightAlt } from "@mui/icons-material";
import { Box, Button, SxProps, Theme, Typography } from "@mui/material";
import qrCodeImageUrl from "../assets/qr-code.png";
import { gray } from "@/shared/theme/theme-primitives";
import { useState } from "react";
import { TermsOfService } from "./terms-of-service";

type Props = {
  sx?: SxProps<Theme>;
};

export const ConnectByQrCode = ({ sx }: Props) => {
  const [isScanned, setIsScanned] = useState(false);

  if (isScanned)
    return <TermsOfService onCancelConnect={() => setIsScanned(false)} />;

  return (
    <Box
      sx={{
        width: {
          xs: "100%",
          sm: "448px",
        },
        mx: {
          xs: "auto",
          sm: 0,
        },
        ...sx,
      }}
    >
      <Typography
        component={"h2"}
        variant="h3"
        sx={{
          fontWeight: 600,
          fontSize: {
            xs: "24px",
            sm: "32px",
            md: "40px",
          },
          lineHeight: "1em",
        }}
      >
        Scan to connect
      </Typography>
      <Typography
        component="p"
        sx={{ fontSize: "12px", mb: "24px" }}
        color="text.secondary"
      >
        Powered by UI8.Wallet
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          maxWidth: "448px",
          width: "100%",
          height: "448px",
          overflow: "hidden",
          backgroundColor: "rgba(244, 245, 246, 1)",
          borderRadius: "16px",
          mb: "24px",
          p: "20px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            maxWidth: "282px",
            width: "100%",
            height: "282px",
            boxShadow: "0px 64px 64px -48px rgba(31, 47, 70, 0.12)",
            backgroundColor: gray[50],
            borderRadius: "12px",
            border: `1px solid rgba(230, 232, 236, 1)`,
            p: "16px",
          }}
        >
          <Box
            sx={{
              width: "120px",
            }}
          >
            <img
              style={{ width: "100%", height: "auto" }}
              alt="qr code"
              src={qrCodeImageUrl}
            />
          </Box>
        </Box>
      </Box>
      <Button
        neutral
        endIcon={<ArrowRightAlt />}
        onClick={() => setIsScanned(true)}
      >
        To scan
      </Button>
    </Box>
  );
};
