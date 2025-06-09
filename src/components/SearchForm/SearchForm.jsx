import { FaSearch } from 'react-icons/fa';
import Button from '../Button/Button';
import s from './SearchForm.module.css';

const SearchForm = () => {
  return (
    <form className={s.form}>
      <input type="text" className={s.input} name="searchText" />
      <Button type="submit" size="medium">
        Search <FaSearch size={16} />
      </Button>
    </form>
  );
};

export default SearchForm;
