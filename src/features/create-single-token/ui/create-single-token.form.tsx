import { Card } from "@/entities/token";
import { tokensMOCK } from "@/entities/token/MOCK";
import { useWindowWidth } from "@/shared/lib/use-window-width";
import { gray } from "@/shared/theme/theme-primitives";
import { UiFileDropzone } from "@/shared/ui/ui-file-dropzone";
import { UiSwitchFormLine } from "@/shared/ui/ui-switch-form-line";
import { East } from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import shadows from "@mui/material/styles/shadows";
import { useEffect, useId, useState } from "react";
import { PreviewModal } from "./preview-modal";
import { Steps } from "./steps";

export const CreateSingleTokenForm = () => {
  const themeColor = useTheme().palette.mode;
  const selectLabelId = useId();
  const [royalties, setRoyalties] = useState("");
  const windowWidth = useWindowWidth();
  const [isModal, setIsModal] = useState(false);
  const [isOpenSteps, setIsOpenSteps] = useState(false);

  useEffect(() => {
    if (windowWidth <= 700) {
      setIsModal(true);
    }
  }, [windowWidth]);

  const handleChangeRoyalties = (event: SelectChangeEvent) => {
    setRoyalties(event.target.value as string);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "start",
        gap: "20px",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ width: "640px", mb: "128px" }}>
        <Box>
          <Typography variant="h2" sx={{ fontSize: "48px", mb: "40px" }}>
            Create single collectible
          </Typography>
          <Box sx={{ mb: "40px" }}>
            <Typography
              component="p"
              variant="body2"
              sx={{ fontSize: "16px", fontWeight: 600 }}
            >
              Upload file
            </Typography>
            <Typography
              component="p"
              variant="caption2"
              sx={{ fontSize: "12px", color: gray[600], mb: "16px" }}
            >
              Drag or choose your file to upload
            </Typography>
            <UiFileDropzone onFilesSelected={() => {}} />
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "32px",
              flexDirection: "column",
              mb: "40px",
            }}
          >
            <Typography
              component="p"
              variant="body2"
              sx={{ fontSize: "16px", fontWeight: 600 }}
            >
              Item Details
            </Typography>

            <TextField
              label="item name"
              placeholder={`e. g. "Redeemable Bitcoin Card with logo"`}
              sx={{
                fontSize: "14px",
              }}
            />
            <TextField
              label="Description"
              placeholder={`e. g. “After purchasing you will able to recived the logo...”`}
              sx={{
                fontSize: "14px",
              }}
            />
            <Box
              sx={{
                display: "flex",
                gap: "20px",
                flexDirection: {
                  xs: "column",
                  md: "row",
                },
              }}
            >
              <FormControl fullWidth>
                <InputLabel id={selectLabelId}>Royalties</InputLabel>

                <Select
                  labelId={selectLabelId}
                  value={royalties}
                  label="Royalties"
                  onChange={handleChangeRoyalties}
                >
                  <MenuItem value={"10%"}>10%</MenuItem>
                  <MenuItem value={"30%"}>30%</MenuItem>
                  <MenuItem value={"50%"}>50%</MenuItem>
                  <MenuItem value={"70%"}>70%</MenuItem>
                  <MenuItem value={"100%"}>100%</MenuItem>
                </Select>
              </FormControl>
              <TextField
                label="Size"
                fullWidth
                placeholder={`e. g. Size`}
                sx={{
                  fontSize: "14px",
                }}
              />
              <TextField
                label="Propertie"
                fullWidth
                placeholder={`e. g. Propertie`}
                sx={{
                  fontSize: "14px",
                }}
              />
            </Box>
          </Box>
          <Divider
            sx={{
              mb: "40px",
            }}
          />
          <Box
            sx={{
              display: "flex",
              gap: "32px",
              flexDirection: "column",
              mb: "40px",
            }}
          >
            <UiSwitchFormLine
              title="Put on sale"
              subtitle="You’ll receive bids on this item"
            />
            <UiSwitchFormLine
              title="Instant sale price"
              subtitle="Enter the price for which the item will be instantly sold"
            />
            <UiSwitchFormLine
              title="Unlock once purchased"
              subtitle="Content will be unlocked after successful transaction"
            />
          </Box>
        </Box>
        <Button
          size="large"
          neutral
          endIcon={<East />}
          fullWidth={isModal}
          sx={{ mb: "12px" }}
          onClick={() => setIsOpenSteps(true)}
        >
          Create item
        </Button>
        <PreviewModal
          tokenData={tokensMOCK[1]}
          sx={{ display: isModal ? "block" : "none" }}
        />
        <Steps
          sx={{ width: "448px" }}
          isOpen={isOpenSteps}
          onClose={() => setIsOpenSteps(false)}
        />
      </Box>
      <Box
        sx={{
          display: isModal ? "none" : "block",
          flexShrink: 0,
          p: "48px",
          borderRadius: "16px",
          boxShadow: shadows[8],
          border: `1px solid ${themeColor === "light" ? "none" : gray[700]}`,
        }}
      >
        <Card tokenData={tokensMOCK[1]} />
      </Box>
    </Box>
  );
};
