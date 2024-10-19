import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/operations";
import { getUsername } from "../../redux/auth/selectors";
import css from "./UserMenu.module.css";

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(getUsername);

  return (
    <div className={css.box}>
      <p>Hi, {name}</p>
      <button type="button" onClick={() => dispatch(logout())}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;