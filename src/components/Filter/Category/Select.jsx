import "../Filter.css";

const Select = ({ total, name, setId }) => {
  return (
    <select
      onChange={(e) => setId(e.target.value)}
      className="form-select"
      id="episodes"
    >
      <option value="1">Select {name}</option>

      {[...Array(total).keys()].map((x) => {
        return (
          <option key={x + 1} value={x + 1}>
            {name} - {x + 1}
          </option>
        );
      })}
    </select>
  );
};

export default Select;
