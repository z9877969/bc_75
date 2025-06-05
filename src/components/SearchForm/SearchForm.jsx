import { FaSearch } from 'react-icons/fa';
import Button from '../Button/Button';
import s from './SearchForm.module.css';

const SearchForm = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const { value } = e.target.elements.searchText;

    onSubmit(value);
  };
  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <input type="text" className={s.input} name="searchText" />
      <Button type="submit" size="medium">
        Search <FaSearch size={16} />
      </Button>
    </form>
  );
};

export default SearchForm;
