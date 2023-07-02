import { useEffect, useState } from "react";
import Card from "../components/Card/Card";
import Select from "../components/Filter/Category/Select";

const Episode = () => {
  let [id, setId] = useState(1);
  let [fetchedData, updateFetchedData] = useState([]);
  let [results, setResults] = useState([]);
  let { name, air_date, episode } = fetchedData;

  let api = `https://rickandmortyapi.com/api/episode/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);

      let characters = await Promise.all(
        data.characters.map((x) => {
          return fetch(x).then((res) => res.json());
        })
      );
      setResults(characters);
    })();
  }, [api]);

  return (
    <div className="container px-lg-3 px-5 margin-top">
      <div className="row d-flex justify-content-end mb-3">
        <div className="col-lg-3">
          <Select total={51} name="Episode" setId={setId} />
        </div>
      </div>
      <div className="mb-3 text-center">
        <h1 className="text-green fw-bold">
          {episode} - {name ? name : "Unknown"}
        </h1>
        <p>
          <span className="text-gray">Air Date: </span>
          {air_date ? air_date : "Unknown"}
        </p>
        <hr />
        <h3 className="text-green fw-bold">Characters</h3>
      </div>
      <div className="row">
        <Card page="/episodes/" results={results} />
      </div>
    </div>
  );
};

export default Episode;
