import { FaSearch } from 'react-icons/fa';
import Button from '../Button/Button';
import s from './SearchForm.module.css';

const SearchForm = ({ onSubmit }) => {
  const handleSabmit = (e) => {
    e.preventDefault();
    const { value } = e.target.elements.searchText;
    onSubmit({ search: value, page: 1 });
  };

  return (
    <form className={s.form} onSubmit={handleSabmit}>
      <input type="text" className={s.input} name="searchText" />
      <Button type="submit" size="medium">
        Search <FaSearch size={16} />
      </Button>
    </form>
  );
};

export default SearchForm;
