import { useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { toggleTheme } from "../redux/slices/counterSlice";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <header className=" mb-3 p-4">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="fs-2">Redux Toolkit</div>

        <nav className="d-flex align-items-center gap-5">
          <NavLink to={"/"}>SAYAÇ</NavLink>
          <NavLink to={"/crud"}>CRUD</NavLink>
          <button onClick={() => dispatch(toggleTheme())}>Tema Değiş</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
