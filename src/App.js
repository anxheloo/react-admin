import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Home from "./screens/Home/Home";
import Users from "./screens/Users/Users";
import Products from "./screens/Product/Products";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Menu from "./components/Menu/Menu";
import NoPage from "./screens/NoPage/NoPage";
import Login from "./screens/Login/Login";

function App() {
  const Layout = () => {
    return (
      <div
        id="main-container"
        className="h-screen flex flex-col justify-between"
      >
        <Navbar></Navbar>
        <div
          id="horizontal-container"
          className="h-full bg-mainBg text-mainColor flex"
        >
          <div
            id="menu-container"
            className="w-[250px] py-[5px] px-[20px] border-r-[2px] border-[rgba(255,255,255,0.1)]"
          >
            <Menu></Menu>
          </div>
          <div id="content-container" className="py-[5px] px-[20px] w-full">
            <Outlet></Outlet>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/home" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="users" element={<Users />} />
          <Route path="products" element={<Products />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
