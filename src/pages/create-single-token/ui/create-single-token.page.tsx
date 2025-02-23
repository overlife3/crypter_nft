import { CreateSingleTokenForm } from "@/features/create-single-token";
import { Container } from "@mui/material";

export const CreateSingleTokenPage = () => {
  return (
    <Container
      sx={{
        pt: "128px",
      }}
    >
      <CreateSingleTokenForm />
    </Container>
  );
};
