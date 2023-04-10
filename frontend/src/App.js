import { Stack, ThemeProvider, createTheme } from "@mui/material";
import MainPage from "./Pages/MainPage";
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Department from "./Pages/Department";
import DepEventList from "./Pages/DepEventList";
import SingleEvent from "./Pages/SingleEvent";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import SplashPage from "./Components/SplashPage";
import Credits from "./Pages/Credits";
import axios from 'axios'



const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  const [user, setUser] = useState(null);
  const [showSplash, setShowSplash] = useState(true)

  useEffect(() => {
    // simulate a delay in loading
    setTimeout(() => {
      setShowSplash(false);
    }, 3000);
  }, []);


	const getUser = async () => {
		try {
			const url = `${process.env.REACT_APP_API_URL}auth/login/success`;
			const { data } = await axios.get(url, { withCredentials: true });
			setUser(data.user._json);
      console.log(data.user._json)
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		getUser();
	}, []);

  return (

    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              {showSplash ?
              <Stack>

                <SplashPage />
              </Stack>
                :
                <MainPage user={user}/>
              }
            </motion.div>
          } />
        </Routes>
        <Routes>
          <Route path="/branch" element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <Department user={user}/>
            </motion.div>
          } />
        </Routes>
        <Routes>
          <Route path="/branch/:event" element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <DepEventList user={user}/>
            </motion.div>
          } />
        </Routes>
        <Routes>
          <Route path="/branch/:event/:eventId" element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <SingleEvent user={user}/>
            </motion.div>
          } />
        </Routes>
        <Routes>
          <Route path="/dev-connect" element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <Credits user={user}/>
            </motion.div>
          } />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>

  );
}

export default App;
