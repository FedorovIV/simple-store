import { useContext } from "react";
import { IoBasketOutline, IoPersonOutline } from "react-icons/io5";
import SearchBlock from "./SearchBlock";
import Context from "../main";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";

const Header = observer(() => {
  const { store } = useContext(Context);

  return (
    <div className="bg-black text-white p-4 flex items-center justify-between fixed top-0 w-full z-50">
      <div className="flex items-center">
        <Link to="/">
          <div className="text-3xl mr-2">Clothing Store</div>
        </Link>
      </div>
      <SearchBlock />
      <div className="flex items-center">
        <div className=" relative flex justify-center items-center px-2">
          <Link to="/basket">
            <IoBasketOutline
              size={45}
              className="text-white text-2xl mx-3 cursor-pointer"
            />
          </Link>

          <div className="w-5 h-5 bg-red-700 text-white rounded-full flex items-center justify-center -ml-3">
            {store.choosenProduct.length}
          </div>
        </div>

        <Link to="/profile">
          <IoPersonOutline
            size={40}
            className="text-white text-2xl cursor-pointer"
          />
        </Link>
      </div>
    </div>
  );
});

export default Header;
