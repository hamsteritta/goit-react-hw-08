import Navigation from "../Navigation/Navigation";
import AuthNav from "../AuthNav/AuthNav";
import UserMenu from "../UserMenu/UserMenu";
import { useSelector } from "react-redux";
import { getIsLoggedIn, getIsRefreshing } from "../../redux/auth/selectors";

import css from "./AppBar.module.css";

const AppBar = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const isRefreshing = useSelector(getIsRefreshing);

  return (
    <header className={css.box}>
      <Navigation />
      {isRefreshing ? (
        <p>Loading...</p>
      ) : isLoggedIn ? (
        <UserMenu />
      ) : (
        <AuthNav />
      )}
    </header>
  );
};

export default AppBar;