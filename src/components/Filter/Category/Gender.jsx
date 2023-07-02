import FilterBtn from "../FilterBtn";

const Gender = ({ setGender, setPageNumber }) => {
  let gender = ["male", "female", "unknown", "genderless"];
  return (
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseThree"
          aria-expanded="false"
          aria-controls="collapseThree"
        >
          Gender
        </button>
      </h2>
      <div
        id="collapseThree"
        className="accordion-collapse collapse"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body d-flex flex-wrap gap-2">
          {gender.map((item, index) => (
            <FilterBtn
              key={index}
              index={index}
              name="gender"
              item={item}
              task={setGender}
              setPageNumber={setPageNumber}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gender;
