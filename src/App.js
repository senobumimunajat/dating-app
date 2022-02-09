import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import Home from "./components/home/Home";
import theme from "./utils/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Home />
    </ThemeProvider>
    
  );
}

export default App;
