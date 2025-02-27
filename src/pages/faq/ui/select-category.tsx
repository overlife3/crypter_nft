import {
  Box,
  MenuItem,
  Select,
  SelectChangeEvent,
  SxProps,
  Theme,
} from "@mui/material";
import { useState } from "react";
import { SelectCategoryType } from "./types";

type Props = {
  sx?: SxProps<Theme>;
  onChange: (value: SelectCategoryType) => void;
};

export const SelectCategory = ({ sx, onChange }: Props) => {
  const [category, setCategory] = useState<SelectCategoryType>("general");

  const handleChange = (e: SelectChangeEvent) => {
    setCategory(e.target.value as SelectCategoryType);
    onChange(e.target.value as SelectCategoryType);
  };

  return (
    <Box
      sx={{
        ...sx,
        width: "100%",
      }}
    >
      <Select
        value={category}
        label="category"
        onChange={handleChange}
        fullWidth
      >
        <MenuItem value="general">General</MenuItem>
        <MenuItem value="hoisting">Hoisting</MenuItem>
        <MenuItem value="product">Product</MenuItem>
      </Select>
    </Box>
  );
};
