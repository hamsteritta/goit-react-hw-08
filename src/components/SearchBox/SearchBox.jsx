import css from "./SearchBox.module.css";
import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import { selectFilter } from "../../redux/filters/selectors";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleFilterChange = event => {
    dispatch(changeFilter(event.target.value));
  };

 return (
    <div className={css.filter}>
      <p>Find contacts by name or number</p>
      <input
        type="text"
        value={filter}
        onChange={handleFilterChange}
      />
    </div>
  );
}
export default SearchBox;