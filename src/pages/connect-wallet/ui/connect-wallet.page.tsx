import { useSelectByTheme } from "@/shared/lib/use-select-by-theme";
import { brand, gray } from "@/shared/theme/theme-primitives";
import {
  AccountBalanceWalletOutlined,
  ArrowRightAlt,
  Check,
  West,
} from "@mui/icons-material";
import { Box, Container, Divider, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import anyMethodImgUrl from "../assets/any-method.jpg";

export const ConnectWalletPage = () => {
  const navigate = useNavigate();
  const selectByTheme = useSelectByTheme();
  const [isSelected, setIsSelected] = useState(false);

  return (
    <Container
      sx={{
        pt: "80px",
      }}
    >
      <Box
        sx={{ display: "flex", alignItems: "center", gap: "16px", mb: "40px" }}
      >
        <Box
          sx={{
            width: "40px",
            height: "40px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            borderRadius: "4px",
            "&:hover": {
              backgroundColor: selectByTheme(gray[100], gray[700]),
            },
          }}
          onClick={() => navigate(-1)}
        >
          <West />
        </Box>
        <Typography
          component="h1"
          variant="h2"
          sx={{ fontWeight: 600, fontSize: "48px" }}
        >
          Connect your wallet
        </Typography>
      </Box>
      <Divider sx={{ mb: "80px" }} />

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          gap: "16px",
          flexDirection: {
            sm: "row",
            xs: "column",
          },
        }}
      >
        <Box
          sx={{
            maxWidth: "544px",
            width: "100%",
          }}
        >
          <ConnectWalletMethod
            selected={isSelected}
            onClick={() => setIsSelected((prev) => !prev)}
          />
        </Box>
        <Box
          sx={{
            width: "100%",
            maxWidth: "448px",
            borderRadius: "26px",
            overflow: "hidden",
            mx: "auto",
          }}
        >
          <img
            style={{ width: "100%", height: "100%" }}
            src={anyMethodImgUrl}
            alt="any method"
          />
        </Box>
      </Box>
    </Container>
  );
};

const ConnectWalletMethod = ({
  selected,
  onClick,
}: {
  selected?: boolean;
  onClick: () => void;
}) => {
  const selectByTheme = useSelectByTheme();
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "32px",
        cursor: "pointer",
        p: "32px",
        border: selected
          ? `2px solid ${selectByTheme(gray[400], gray[700])}`
          : "none",
        borderRadius: "16px",
        transition: "background-color .1s",
        "&:hover": {
          backgroundColor: selectByTheme(gray[400], gray[800]),
        },
      }}
      onClick={onClick}
    >
      <Box
        sx={{
          backgroundColor: selected ? "transparent" : brand[400],
          color: selected ? brand[400] : gray[50],
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexShrink: 0,
          width: {
            md: "64px",
            sm: "32px",
            xs: "64px",
          },
          height: {
            md: "64px",
            sm: "32px",
            xs: "64px",
          },
          borderRadius: "50%",
          border: selected ? `2px solid ${brand[400]}` : "none",
        }}
      >
        {selected ? (
          <Check
            sx={{
              fontSize: {
                xs: "40px",
                sm: "24px",
                md: "40px",
              },
            }}
          />
        ) : (
          <AccountBalanceWalletOutlined
            sx={{
              fontSize: {
                xs: "40px",
                sm: "24px",
                md: "40px",
              },
            }}
          />
        )}
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Typography
          component="p"
          variant="body1"
          sx={{
            fontWeight: 600,
            fontSize: {
              md: " 24px",
              sm: "16px",
              xs: "24px",
            },
          }}
        >
          Coinbase Wallet
        </Typography>

        {selected && <ArrowRightAlt fontSize="large" />}
      </Box>
    </Box>
  );
};
