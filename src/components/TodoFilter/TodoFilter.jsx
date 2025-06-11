import s from './TodoFilter.module.css';

const TodoFilter = () => {
  return (
    <div className={s.wrapper}>
      <select name="priority">
        <option value="all">All</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
    </div>
  );
};

export default TodoFilter;
