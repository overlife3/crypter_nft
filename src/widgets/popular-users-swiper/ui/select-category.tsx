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
  color: gray[600],
  textTransform: "capitalize",
  fontSize: "24px",
  fontWeight: 600,
  "&.Mui-focused": {
    color: gray[600],
  },
}));

const SelectCustom = styled(Select)(() => ({
  border: "none",
  fontSize: "40px",
  fontWeight: 600,
  "& .MuiSvgIcon-root": {
    fontSize: "34px",
  },
}));

const MenuItemCustom = styled(MenuItem)(() => ({
  fontSize: "16px",
}));

export const SelectCategory = () => {
  const id = useId();
  const { category, setCategory } = useWidget();
  const handleChange = (e: SelectChangeEvent<unknown>) =>
    setCategory(e.target.value as typeof category);

  return (
    <FormControl>
      <InputLabelCustom id={id}>Popular</InputLabelCustom>
      <SelectCustom
        id={`${id}-select`}
        labelId={id}
        value={category}
        label="Popular"
        onChange={handleChange}
        MenuProps={{
          slotProps: {
            paper: {
              sx: {
                marginTop: "-5px",
              },
            },
          },
        }}
      >
        <MenuItemCustom value={"seller"}>Sellers</MenuItemCustom>
        <MenuItemCustom value={"buyer"}>Buyers</MenuItemCustom>
      </SelectCustom>
    </FormControl>
  );
};
