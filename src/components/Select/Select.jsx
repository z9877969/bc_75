const Select = ({ value, onChange }) => {
  return (
    <div style={{ width: 'fit-content', margin: '0 auto' }}>
      <label>
        <p> Theme </p>
      </label>
      <select
        name="theme"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="all">All</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
    </div>
  );
};

export default Select;
