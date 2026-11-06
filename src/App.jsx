import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./page/Home.jsx";
import Search from "./page/Search.jsx";
import Detail from "./page/Detail.jsx";
import SearchBar from "./components/SearchBar.jsx";

function App() {
  return (
    <BrowserRouter>
      <SearchBar />

      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/search"} element={<Search />} />
        <Route path={"/detail/:id"} element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;


