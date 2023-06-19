import { useDispatch, useSelector } from 'react-redux';
import css from './Filter.module.css';
import { getFilter } from 'redux/selectors';
import { setFilter } from 'redux/filtersSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter)
  const handleChange = e => {
    const { value } = e.target;
    dispatch(setFilter(value));
  };
  return (
    <>
      <p className={css.filter_text}>Find contacts by name</p>
      <input
        type="text"
        name="filter"
        className={css.filter_input}
        value={filter}
        onChange={handleChange}
      />
    </>
  );
};
export default Filter;
