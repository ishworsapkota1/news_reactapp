import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Layout,
  Category,
  Home,
  News,
  NotFound,
  Login,
  Bookmarks,
} from "./pages";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Design from "./components/Design";

function App() {
  const darkMode = useSelector((state) => state.darkMode.value);

  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? "black" : "white";
    document.body.style.color = darkMode ? "white" : "black";
  }, [darkMode]);
  console.log(import.meta.env.VITE_MY_GOOGLE_LOGIN_CLIENT_ID);
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/design" element={<Design />}></Route>
          <Route path="/news/:id" element={<News />} />
          <Route path="/news/category/:id/:name" element={<Category />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
