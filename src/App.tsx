import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./page/Home.tsx";
import Search from "./page/Search.tsx";
import Detail from "./page/Detail.tsx";
import GlobalStyle from "./page/GlobalStyle.tsx";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>

        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/search"} element={<Search />} />
          <Route path={"/detail/:id"} element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
