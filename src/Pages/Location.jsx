import { useEffect, useState } from "react";
import Card from "../components/Card/Card";
import Select from "../components/Filter/Category/Select";

const Location = () => {
  let [id, setId] = useState(1);
  let [fetchedData, updateFetchedData] = useState([]);
  let [results, setResults] = useState([]);
  let { name, type, dimension } = fetchedData;

  let api = `https://rickandmortyapi.com/api/location/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);

      let residents = await Promise.all(
        data.residents.map((x) => {
          return fetch(x).then((res) => res.json());
        })
      );
      setResults(residents);
    })();
  }, [api]);

  return (
    <div className="container px-lg-3 px-5 margin-top">
      <div className="row d-flex justify-content-end mb-3">
        <div className="col-lg-3">
          <Select total={126} name="Location" setId={setId} />
        </div>
      </div>
      <div className="mb-3 text-center">
        <h1 className="text-green fw-bold">
          {name ? name : "Unknown"} - {type ? type : "Unknown"}
        </h1>
        <p>
          <span className="text-gray">Dimension: </span>
          {dimension ? dimension : "Unknown"}
        </p>
        <hr />
        <h3 className="text-green fw-bold">Residents</h3>
      </div>
      <div className="row">
        <Card page="/locations/" results={results} />
      </div>
    </div>
  );
};

export default Location;
