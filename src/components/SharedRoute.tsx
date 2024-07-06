import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../contexts/AppContext";

const SharedRoute = () => {
  const { isMenuOpen, products } = useContext(AppContext);
  const [search, setSearch] = useState("");
  const [searchedProducts, setSearchProducts] = useState<any>([]);
  useEffect(() => {
    const onSearch = () => {
      const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      );
      setSearchProducts(filteredProducts);
    };
    onSearch();
  }, [search, products]);
  return (
    <div className="container">
      <NavBar search={search} setSearch={setSearch} />
      <main className="main">
        <aside className={isMenuOpen ? "sideBar-close" : "sideBar"}>
          <SideBar />
        </aside>
        <aside className="outlet">
          <Outlet context={{ searchedProducts }} />
        </aside>
      </main>
    </div>
  );
};

export default SharedRoute;
