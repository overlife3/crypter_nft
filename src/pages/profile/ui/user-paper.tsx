import {
  Box,
  Button,
  Divider,
  Link,
  Paper,
  styled,
  SxProps,
  Theme,
  Typography,
} from "@mui/material";
import avatarUrl from "@/shared/assets/user-large.jpg";
import { UserIdRow } from "@/entities/user";
import {
  Facebook,
  Instagram,
  IosShare,
  Language,
  Twitter,
} from "@mui/icons-material";
import { gray } from "@/shared/theme/theme-primitives";

type Props = { sx?: SxProps<Theme> };

const RoundButton = styled(Button)(() => ({
  display: "block",
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  minWidth: "0",
  padding: "0",
}));

export const UserPaper = ({ sx }: Props) => {
  return (
    <Paper
      sx={{
        width: "100%",
        p: "32px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        ...sx,
      }}
    >
      <Box
        sx={{
          borderRadius: "50%",
          width: "160px",
          height: "160px",
          mb: "24px",
          overflow: "hidden",
        }}
      >
        <img style={{ width: "100%", height: "100%" }} src={avatarUrl} />
      </Box>
      <Typography variant="body1" sx={{ fontSize: "24px", fontWeight: 600 }}>
        Enrico Cole
      </Typography>
      <UserIdRow sx={{ mb: "20px" }} />
      <Typography
        variant="caption2"
        sx={{ fontSize: "12px", mb: "20px", textAlign: "center" }}
      >
        A wholesome farm owner in Montana. Upcoming gallery solo show in Germany
      </Typography>
      <Box
        sx={{ display: "flex", alignItems: "center", gap: "8px", mb: "28px" }}
      >
        <Language
          sx={{
            color: gray[600],
            fontSize: "20px",
          }}
        />
        <Link
          href="https://ui8.net"
          variant="button2"
          color="text.primary"
          sx={{
            fontWeight: 700,
            textDecoration: "none",
          }}
        >
          https://ui8.net
        </Link>
      </Box>
      <Box sx={{ mb: "48px", display: "flex", gap: "8px" }}>
        <Button neutral>Follow</Button>
        <RoundButton>
          <IosShare fontSize="small" />
        </RoundButton>
        <RoundButton>...</RoundButton>
      </Box>
      <Box sx={{ mb: "48px" }}>
        <Link href="#" color="text.secondary" sx={{ mr: "24px" }}>
          <Twitter sx={{ fontSize: "20px" }} />
        </Link>
        <Link href="#" color="text.secondary" sx={{ mr: "24px" }}>
          <Instagram sx={{ fontSize: "20px" }} />
        </Link>
        <Link href="#" color="text.secondary">
          <Facebook sx={{ fontSize: "20px" }} />
        </Link>
      </Box>

      <Divider sx={{ mb: "48px", width: "100%" }} />

      <Typography
        variant="caption2"
        sx={{ fontSize: "12px" }}
        color="textSecondary"
      >
        Member since Mar 15, 2021
      </Typography>
    </Paper>
  );
};
