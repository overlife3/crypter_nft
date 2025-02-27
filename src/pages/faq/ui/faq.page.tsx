import { ExpandMore, Home, ImageOutlined, Storage } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import {
  generalAccordionData,
  hoistingAccordionData,
  productAccordionData,
} from "../assets/data";
import { HotBidWidget } from "@/widgets/hot-bid";
import { SelectCategoryItem } from "./select-category-item";
import { SelectCategoryType } from "./types";
import { SelectCategory } from "./select-category";

export const FaqPage = () => {
  const [category, setCategory] = useState<SelectCategoryType>("general");
  const [accordionData, setAccordionData] = useState(generalAccordionData);

  useEffect(() => {
    switch (category) {
      case "general":
        setAccordionData(generalAccordionData);
        break;
      case "hoisting":
        setAccordionData(hoistingAccordionData);
        break;
      case "product":
        setAccordionData(productAccordionData);
    }
  }, [category]);

  return (
    <Container sx={{ pt: "80px" }}>
      <Typography
        variant="h2"
        color="text.secondary"
        sx={{ mb: "12px", fontSize: "12px", lineHeight: "1em" }}
      >
        learn how to get started
      </Typography>
      <Typography
        variant="h2"
        sx={{
          fontSize: {
            xs: "24px",
            sm: "32px",
            md: "48px",
          },
          lineHeight: "1em",
          mb: "20px",
        }}
      >
        Frequently asked questions
      </Typography>
      <Typography
        variant="body2"
        sx={{
          fontSize: {
            xs: "14px",
            sm: "16px",
          },
          mb: {
            xs: "40px",
            sm: "80px",
          },
        }}
      >
        Join Stacks community now to get free updates and also alot of freebies
        are waiting for you.
      </Typography>

      <Box
        sx={{
          display: "flex",
          gap: "64px",
          mb: "136px",
          justifyContent: "space-between",
          flexDirection: {
            xs: "column",
            sm: "row",
          },
        }}
      >
        <Box
          sx={{
            display: {
              xs: "none",
              sm: "flex",
            },
            gap: "20px",
            width: "160px",
            flexDirection: "column",
          }}
        >
          <SelectCategoryItem
            selected={category === "general"}
            icon={<Home sx={{ fontSize: "20px" }} />}
            onClick={() => setCategory("general")}
            text="General"
          />
          <SelectCategoryItem
            selected={category === "hoisting"}
            icon={<Storage sx={{ fontSize: "20px" }} />}
            onClick={() => setCategory("hoisting")}
            text="Hoisting"
          />
          <SelectCategoryItem
            selected={category === "product"}
            icon={<ImageOutlined sx={{ fontSize: "20px" }} />}
            onClick={() => setCategory("product")}
            text="Product"
          />
        </Box>
        <Box
          sx={{
            display: {
              xs: "block",
              sm: "none",
            },
          }}
        >
          <SelectCategory onChange={setCategory} />
        </Box>
        <Box sx={{ maxWidth: "735px" }}>
          {accordionData.map((item) => (
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: "16px",
                  }}
                >
                  {item.title}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ fontSize: "16px" }}
                >
                  {item.details}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Box>
      <HotBidWidget sx={{ mb: "128px" }} />
    </Container>
  );
};
