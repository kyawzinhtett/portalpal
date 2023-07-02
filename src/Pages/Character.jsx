import { useState, useEffect } from "react";
import Filter from "../components/Filter/Filter";
import Search from "../components/Search/Search";
import Card from "../components/Card/Card";
import Pagination from "../components/Pagination/Pagination";

const Character = () => {
  let [pageNumber, setPageNumber] = useState(1);
  let [search, setSearch] = useState("");
  let [status, setStatus] = useState("");
  let [species, setSpecies] = useState("");
  let [gender, setGender] = useState("");
  let [fetchedData, updateFetchedData] = useState([]);
  let { info, results } = fetchedData;

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&species=${species}&gender=${gender}`;

  useEffect(() => {
    (async () => {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  return (
    <div className="Character">
      <div className="container px-lg-3 px-5 mt-3">
        <Search setSearch={setSearch} setPageNumber={setPageNumber} />
        <Filter
          setStatus={setStatus}
          setSpecies={setSpecies}
          setGender={setGender}
          setPageNumber={setPageNumber}
        />
        <div className="row">
          <Card page="/characters/" results={results} />
        </div>
        <Pagination
          info={info}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
        />
      </div>
    </div>
  );
};

export default Character;
