import "./Search.css";

const Search = ({ setSearch, setPageNumber }) => {
  return (
    <div className="row d-flex justify-content-end margin-top">
      <div className="col-lg-3">
        <form className="mb-3">
          <input
            onChange={(event) => {
              setPageNumber(1);
              setSearch(event.target.value);
            }}
            type="search"
            className="form-control shadow search"
            placeholder="Search by Character Name"
          />
        </form>
      </div>
    </div>
  );
};

export default Search;
