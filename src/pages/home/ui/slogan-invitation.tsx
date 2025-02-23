import { gray } from "@/shared/theme/theme-primitives";
import { Box, Button, Container, Typography, useTheme } from "@mui/material";
import imgUrl from "../assets/earn-free.png";

export const SloganInvitation = () => {
  const themeColor = useTheme().palette.mode;
  return (
    <Box
      sx={{
        borderTop: `1px solid ${
          themeColor === "light" ? gray[400] : gray[700]
        }`,
      }}
    >
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: {
              md: "space-between",
              xs: "center",
            },
            alignItems: "center",
            py: "80px",
            flexDirection: {
              xs: "column",
              md: "row",
            },
            gap: "32px",
          }}
        >
          <Box
            sx={{
              width: {
                xs: "100%",
                sm: "600px",
                md: "480px",
              },
              flexShrink: "0",
            }}
          >
            <Typography
              component="p"
              variant="hairline1"
              sx={{
                mb: "12px",
                color: gray[600],
                textTransform: "uppercase",
                textAlign: {
                  md: "left",
                  xs: "center",
                },
              }}
            >
              Save your time with Stacks
            </Typography>
            <Typography
              component={"h2"}
              variant="h1"
              sx={{
                fontSize: "64px",
                mb: "20px",
                textAlign: {
                  md: "left",
                  xs: "center",
                },
              }}
            >
              Earn free crypto with Crypter
            </Typography>
            <Typography
              variant="body2"
              fontSize={"16px"}
              mb={"40px"}
              color={gray[600]}
              sx={{
                fontSize: "16px",
                mb: "40px",
                color: gray[600],
                textAlign: {
                  md: "left",
                  xs: "center",
                },
              }}
            >
              A creative agency that lead and inspire
            </Typography>
            <Box>
              <Button
                sx={{
                  display: {
                    xs: "block",
                    md: "inline",
                  },
                  width: {
                    xs: "100%",
                    md: "auto",
                  },
                  mr: {
                    xs: 0,
                    md: "16px",
                  },
                  mb: {
                    xs: "16px",
                    md: 0,
                  },
                }}
                size="large"
                neutral
              >
                Earn now
              </Button>
              <Button
                sx={{
                  display: {
                    xs: "block",
                    md: "inline",
                  },
                  width: {
                    xs: "100%",
                    md: "auto",
                  },
                  mr: {
                    xs: 0,
                    md: "16px",
                  },
                  mb: {
                    xs: "16px",
                    md: 0,
                  },
                }}
                size="large"
              >
                Discover more
              </Button>
            </Box>
          </Box>
          <Box>
            <img
              style={{ width: "100%" }}
              src={imgUrl}
              alt="earn free crypto with crypter"
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
