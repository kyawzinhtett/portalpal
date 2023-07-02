const FilterBtn = ({ index, name, item, task, setPageNumber }) => {
  return (
    <div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name={name}
          id={`${name}-${index}`}
        />
        <label
          onClick={() => {
            task(item);
            setPageNumber(1);
          }}
          className="btn btn-secondary"
          htmlFor={`${name}-${index}`}
        >
          {item}
        </label>
      </div>
    </div>
  );
};

export default FilterBtn;
