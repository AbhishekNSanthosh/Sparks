import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import Login from "./pages/Login";

function App() {

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={
              <Dashboard />} />
          </Routes>
          <Routes>
            <Route path="/adminlogin" element={
              <Login />} />
          </Routes>
        </BrowserRouter>
        </ThemeProvider>
    </div>
  );
}

export default App;
