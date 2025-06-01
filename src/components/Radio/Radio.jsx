const Radio = () => {
  return (
    <>
      <div>
        <input type="radio" name="priority" value="low" />
        <label>Low</label>
      </div>
      <div>
        <input type="radio" name="priority" value="medium" />
        <label>Medium</label>
      </div>
      <div>
        <input type="radio" name="priority" value="high" />
        <label>High</label>
      </div>
    </>
  );
};

export default Radio;
