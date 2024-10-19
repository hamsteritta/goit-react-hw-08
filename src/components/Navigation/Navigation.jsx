import { useSelector } from "react-redux";
import { getIsLoggedIn } from "../../redux/auth/selectors";
import css from "./Navigation.module.css";
import clsx from "clsx";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  const classToggle = ({ isActive }) => clsx(css.link, isActive && css.active);

  return (
    <nav className={css.box}>
      <NavLink to="/" className={classToggle}>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" className={classToggle}>
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;