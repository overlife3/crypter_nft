import {
  Button,
  FormControl,
  styled,
  TextField,
  useTheme,
} from "@mui/material";
import { gray } from "../theme/theme-primitives";
import { East } from "@mui/icons-material";

type Props = {
  label: string;
};

const TextFieldCustom = styled(TextField)(() => ({
  width: "100%",
  fontSize: "14px",

  "& .MuiOutlinedInput-root": {
    borderColor: "transparent",
    padding: 0,
    outline: "none",
  },
  "& input::placeholder": {
    color: `${gray[600]} !important`,
    opacity: 1,
  },
}));

export const UiLineForm = ({ label }: Props) => {
  const themeColor = useTheme().palette.mode;
  return (
    <FormControl
      sx={{
        border: `2px solid`,
        borderColor: themeColor === "light" ? gray[400] : gray[700],
        p: "8px",
        borderRadius: "90px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: "16px",
        gap: "8px",
      }}
    >
      <TextFieldCustom placeholder={label} />
      <Button
        sx={{
          width: "32px",
          minWidth: "32px",
          boxSizing: "border-box",
          height: "32px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexShrink: 0,
        }}
        neutral
      >
        <East />
      </Button>
    </FormControl>
  );
};
