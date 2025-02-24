import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  SxProps,
  Theme,
  Typography,
} from "@mui/material";
import termsImgUrl from "../assets/terms.png";
import { useState } from "react";

type Props = { sx?: SxProps<Theme>; onCancelConnect: () => void };

export const TermsOfService = ({ sx, onCancelConnect }: Props) => {
  const [state, setState] = useState({
    age_restriction: false,
    agreement_with_rules: false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <Box
      sx={{
        width: {
          xs: "100%",
          sm: "448px",
        },
        mx: {
          xs: "auto",
          sm: 0,
        },
        ...sx,
      }}
    >
      <Typography
        component={"h2"}
        variant="h3"
        sx={{
          fontWeight: 600,
          fontSize: {
            xs: "24px",
            sm: "32px",
            md: "40px",
          },
          mb: "12px",
          lineHeight: "1em",
        }}
      >
        Terms of service
      </Typography>
      <Typography
        component="p"
        sx={{ fontSize: "12px", mb: "24px", lineHeight: "1.2em" }}
        color="text.secondary"
      >
        Please take a few minutes to read and understand{" "}
        <Typography
          component="span"
          sx={{
            fontWeight: 600,
            fontSize: "12px",
            lineHeight: "1.2em",
            mb: {
              xs: "30px",
              sm: "40px",
            },
          }}
          color="text.primary"
        >
          Stacks Terms of Service
        </Typography>
        . To continue, you’ll need to accept the terms of services by checking
        the boxes.
      </Typography>
      <Box
        sx={{
          width: "100%",
          height: "160px",
          mb: {
            xs: "30px",
            sm: "40px",
          },
        }}
      >
        <img
          src={termsImgUrl}
          alt="terms of service"
          style={{ width: "100%", height: "100%" }}
        />
      </Box>
      <FormGroup sx={{ mb: "40px" }}>
        <FormControlLabel
          required
          control={
            <Checkbox
              name="age_restriction"
              onChange={handleChange}
              checked={state.age_restriction}
              sx={{
                m: 0,
                mx: "12px",
              }}
            />
          }
          slotProps={{
            typography: {
              sx: {
                fontSize: "14px",
              },
            },
          }}
          sx={{
            mb: "12px",
          }}
          label="I am at least 13 year old"
        />
        <FormControlLabel
          required
          control={
            <Checkbox
              name="agreement_with_rules"
              onChange={handleChange}
              checked={state.agreement_with_rules}
              sx={{
                m: 0,
                mx: "12px",
              }}
            />
          }
          slotProps={{
            typography: {
              sx: {
                fontSize: "14px",
              },
            },
          }}
          label="I agree Stack terms of service"
        />
      </FormGroup>
      <Button sx={{ mr: "8px" }} onClick={onCancelConnect}>
        Cancel
      </Button>
      <Button
        neutral
        disabled={
          state.age_restriction === false ||
          state.agreement_with_rules === false
        }
      >
        Get started now
      </Button>
    </Box>
  );
};
