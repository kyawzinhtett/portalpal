import Gender from "./Category/Gender";
import Species from "./Category/Species";
import Status from "./Category/Status";
import "./Filter.css";

const Filter = ({ setStatus, setSpecies, setGender, setPageNumber }) => {
  let clear = () => {
    setStatus("");
    setSpecies("");
    setGender("");
    setPageNumber(1);
    window.location.reload(false);
  };

  return (
    <div className="row accordion mb-3">
      <div className="col-lg-3">
        <p
          className="text-center text-decoration-underline small"
          style={{ cursor: "pointer" }}
          onClick={clear}
        >
          Clear Filters
        </p>
        <Status setStatus={setStatus} setPageNumber={setPageNumber} />
        <Species setSpecies={setSpecies} setPageNumber={setPageNumber} />
        <Gender setGender={setGender} setPageNumber={setPageNumber} />
      </div>
    </div>
  );
};

export default Filter;
