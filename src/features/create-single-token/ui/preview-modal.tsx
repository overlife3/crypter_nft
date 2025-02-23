import { Card, Token } from "@/entities/token";
import { gray } from "@/shared/theme/theme-primitives";
import { UiCloseButton } from "@/shared/ui/ui-close-button";
import { CancelOutlined } from "@mui/icons-material";
import {
  Box,
  Button,
  Modal,
  Paper,
  SxProps,
  Theme,
  Typography,
} from "@mui/material";
import { useState } from "react";

type Props = {
  sx?: SxProps<Theme>;
  tokenData: Token;
};

export const PreviewModal = ({ sx, tokenData }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClearAll = () => {
    setIsOpen(false);
  };
  return (
    <Box sx={sx}>
      <Button size="large" onClick={() => setIsOpen(true)} fullWidth>
        Preview
      </Button>
      <Modal
        component="div"
        open={isOpen}
        onClose={() => setIsOpen(false)}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Paper sx={{ width: "304px", p: "24px" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: "24px",
            }}
          >
            <Typography
              variant="body1"
              sx={{ fontWeight: 600, fontSize: "24px" }}
            >
              Preview
            </Typography>
            <UiCloseButton onClick={() => setIsOpen(false)} />
          </Box>
          <Card tokenData={tokenData} sx={{ mb: "24px" }} />
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              color: gray[600],
              cursor: "pointer",
              "&:hover": {
                color: gray[500],
              },
            }}
            onClick={handleClearAll}
          >
            <CancelOutlined />
            <Typography
              variant="button"
              sx={{ fontWeight: 600, textTransform: "capitalize" }}
            >
              Clear all
            </Typography>
          </Box>
        </Paper>
      </Modal>
    </Box>
  );
};
