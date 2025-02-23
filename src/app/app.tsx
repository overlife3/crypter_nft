import { AppTheme } from "./app-theme";
import "./fonts";
import { CssBaseline, GlobalStyles, StyledEngineProvider } from "@mui/material";
import { AppRouter } from "./app-router";

export function App() {
  return (
    <StyledEngineProvider injectFirst>
      <AppTheme>
        <CssBaseline />
        <GlobalStyles
          styles={{
            body: {
              fontSize: "1rem", // Ваш размер шрифта
              lineHeight: "1", // Ваш межстрочный интервал
            },
          }}
        />
        <AppRouter />
      </AppTheme>
    </StyledEngineProvider>
  );
}
