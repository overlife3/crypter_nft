import { brand, gray } from "@/shared/theme/theme-primitives";
import { UiCloseButton } from "@/shared/ui/ui-close-button";
import { UiLoader } from "@/shared/ui/ui-loader";
import {
  CreateOutlined,
  LocalMallOutlined,
  UploadFile,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Modal,
  Paper,
  SxProps,
  Theme,
  Typography,
  useTheme,
} from "@mui/material";
import { green, red } from "@mui/material/colors";
import { ReactNode } from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  sx?: SxProps<Theme>;
};

export const Steps = ({ isOpen, onClose, sx }: Props) => {
  return (
    <Modal
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      component="div"
      open={isOpen}
      onClose={onClose}
    >
      <Paper
        sx={{
          p: "32px",
          ...sx,
        }}
      >
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
          <UiCloseButton onClick={onClose} />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "32px",
          }}
        >
          <Step
            title="Upload files & Mint token"
            subTitle="Call contract method"
            icon={<UploadFile />}
            state={"inaction"}
          />
          <Step
            title="Sign sell order"
            subTitle="Sign sell order using your wallet"
            icon={<CreateOutlined />}
            state={"inaction"}
          />
          <Step
            title="Sign lock order"
            subTitle="Sign lock order using your wallet"
            icon={<LocalMallOutlined />}
            state={"inaction"}
            disabled
          />
        </Box>
      </Paper>
    </Modal>
  );
};

type StateStep = "fulfilled" | "pending" | "rejected" | "inaction";

type StepProps = {
  icon: ReactNode;
  title: string;
  subTitle: string;
  state: StateStep;
  disabled?: boolean;
};

const Step = ({ icon, subTitle, title, state, disabled }: StepProps) => {
  const themeColor = useTheme().palette.mode;

  return (
    <Box>
      <Box sx={{ display: "flex", gap: "20px", mb: "16px" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: getBackgroundColorIconByState(state, themeColor),
            color: getColorIconByState(state),
            borderRadius: "50%",
            width: "48px",
            height: "48px",
            flexShrink: 0,
            border:
              state === "rejected" || state === "fulfilled"
                ? `2px solid ${getColorIconByState(state)}`
                : "none",
          }}
        >
          {icon}
        </Box>
        <Box>
          <Typography
            component="p"
            variant="body2"
            sx={{
              fontSize: "16px",
              mb: "4px",
            }}
          >
            {title}
          </Typography>
          <Typography
            component="p"
            variant="caption2"
            color="text.secondary"
            sx={{
              fontSize: "12px",
            }}
          >
            {subTitle}
          </Typography>
        </Box>
      </Box>
      {getButtonByState(state, disabled)}
    </Box>
  );
};

const getButtonByState = (state: StateStep, disabled: boolean | undefined) => {
  switch (state) {
    case "inaction":
      return (
        <Button
          size="large"
          neutral
          fullWidth
          sx={{
            opacity: disabled ? 0.3 : 1,
            "&:disabled": {
              backgroundColor: brand[400],
            },
          }}
          disabled={disabled}
        >
          Start now
        </Button>
      );
    case "pending":
      return (
        <Button size="large" neutral fullWidth>
          <UiLoader />
        </Button>
      );
    case "fulfilled":
      return (
        <Button
          size="large"
          sx={{
            backgroundColor: gray[500],
            "&:disabled": {
              backgroundColor: gray[500],
            },
          }}
          neutral
          fullWidth
          disabled
        >
          Done
        </Button>
      );
    case "rejected":
      return (
        <Button
          size="large"
          sx={{
            backgroundColor: "transparent",
            color: red[400] + "!important",
            "&:hover": {
              backgroundColor: "transparent",
            },
          }}
          fullWidth
        >
          Failed
        </Button>
      );
  }
};

const getColorIconByState = (state: StateStep) => {
  switch (state) {
    case "inaction":
      return gray[600];
    case "pending":
      return gray[600];
    case "fulfilled":
      return green[400];
    case "rejected":
      return red[400];
  }
};

const getBackgroundColorIconByState = (
  state: StateStep,
  themeColor: "light" | "dark"
) => {
  if (state === "inaction" || state === "pending")
    return themeColor === "light" ? gray[400] : gray[700];
  else return "transparent";
};
