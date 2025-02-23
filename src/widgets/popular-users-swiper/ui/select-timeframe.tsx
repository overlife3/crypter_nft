import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  styled,
} from "@mui/material";
import { useId } from "react";
import { useWidget } from "../model/widget.store";
import { gray } from "@/shared/theme/theme-primitives";

const InputLabelCustom = styled(InputLabel)(() => ({
  color: gray[500],
  textTransform: "capitalize",
  fontSize: "24px",
  fontWeight: 600,
  "&.Mui-focused": {
    color: gray[600],
  },
}));

const SelectCustom = styled(Select)(() => ({
  border: `2px solid ${gray[700]}`,
  borderRadius: "12px",
  padding: "12px 8px 12px 16px",
  maxWidth: "256px",
  width: "256px",
  boxSizing: "border-box",
  fontSize: "16px",
  marginTop: "20px",
  "&.Mui-focused .MuiSvgIcon-root": {
    borderColor: gray[400],
  },
  "& .MuiSvgIcon-root": {
    border: `2px solid ${gray[700]}`,
    borderRadius: "50%",
    fontSize: "30px",
  },
  "&:hover .MuiSvgIcon-root": {
    borderColor: gray[400],
  },
}));

const MenuItemCustom = styled(MenuItem)(() => ({
  fontSize: "16px",
}));

export const SelectTimeframe = () => {
  const id = useId();
  const { timeframe, setTimeframe } = useWidget();
  const handleChange = (e: SelectChangeEvent<unknown>) =>
    setTimeframe(e.target.value as typeof timeframe);

  return (
    <FormControl>
      <InputLabelCustom id={id}>Timeframe</InputLabelCustom>
      <SelectCustom
        id={`${id}-select`}
        labelId={id}
        value={timeframe}
        label="Timeframe"
        onChange={handleChange}
      >
        <MenuItemCustom value={"1d"}>Today</MenuItemCustom>
        <MenuItemCustom value={"7d"}>Week</MenuItemCustom>
        <MenuItemCustom value={"30d"}>Month</MenuItemCustom>
      </SelectCustom>
    </FormControl>
  );
};
