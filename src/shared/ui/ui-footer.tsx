import { Box, Container, Divider, Typography, useTheme } from "@mui/material";
import { UiLogo } from "./ui-logo";
import { gray } from "../theme/theme-primitives";
import { ReactNode } from "react";
import { Link } from "react-router-dom";

type Props = {
  groups: GroupLinksType[];
  right: ReactNode;
};

export const UiFooter = ({ groups, right }: Props) => {
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
          component="footer"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            pt: "80px",
            pb: "48px",
            alignItems: {
              sm: "start",
            },
            flexDirection: {
              xs: "column",
              sm: "row",
            },
          }}
        >
          <Box
            sx={{
              width: "256px",
              mb: {
                xs: "32px",
                sm: "0",
              },
            }}
          >
            <UiLogo
              sx={{
                mb: "32px",
              }}
            />
            <Typography
              variant="body2"
              fontSize={"24px"}
              sx={{
                fontSize: {
                  xs: "16px",
                  sm: "24px",
                },
              }}
            >
              The New Creative Economy.
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: {
                xs: "20px",
                sm: "32px",
              },
              flexDirection: {
                xs: "column",
                sm: "row",
              },
            }}
          >
            {groups.map((item) => (
              <GroupLinks data={item} themeColor={themeColor} />
            ))}
            <Divider />

            {right}
          </Box>
        </Box>
        <Box
          sx={{
            py: "32px",
            borderTop: `1px solid ${
              themeColor === "light" ? gray[400] : gray[700]
            }`,
          }}
        >
          <Typography
            sx={{ fontSize: "12px", color: gray[600] }}
            variant="caption2"
          >
            Copyright © 2021 UI8 LLC. All rights reserved
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export type GroupLinksType = {
  title: string;
  links: {
    title: string;
    url: string;
  }[];
};

const GroupLinks = ({
  data,
  themeColor,
}: {
  data: GroupLinksType;
  themeColor: "light" | "dark";
}) => {
  return (
    <>
      <Divider />
      <Box
        sx={{
          width: "136px",
        }}
      >
        <Typography
          variant="body2"
          component={"h3"}
          sx={{
            mb: {
              xs: "12px",
              sm: "24px",
            },
          }}
        >
          {data.title}
        </Typography>
        <Box>
          {data.links.map((item) => (
            <Typography
              component={"span"}
              // href={item.url}
              variant="button2"
              sx={{
                display: "block",
                fontSize: "14px",
                mb: {
                  xs: "12px",
                  sm: "24px",
                },
                color: gray[600],
                textDecoration: "none",
                "&:hover": {
                  color: themeColor === "light" ? gray[700] : gray[500],
                },
              }}
            >
              <Link
                style={{ color: "inherit", textDecoration: "inherit" }}
                to={item.url}
              >
                {item.title}
              </Link>
            </Typography>
          ))}
        </Box>
      </Box>
    </>
  );
};
