import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const CardDetail = () => {
  let { id } = useParams();
  let [fetchedData, updateFetchedData] = useState([]);

  let { name, origin, species, gender, status, type, image, location } =
    fetchedData;

  let api = `https://rickandmortyapi.com/api/character/${id}`;

  useEffect(() => {
    (async () => {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  return (
    <div className="container d-flex justify-content-center margin-top">
      <div className="card shadow-sm rounded w-75 mt-5">
        <div className="row">
          <div className="col-lg-5">
            <img
              className="d-block w-100 img-fluid rounded-start rounded-top-lg"
              src={image}
              alt={name}
            />
          </div>
          <div className="col-lg-7">
            <div className="card-block p-3">
              <div className="mt-2">
                <h5 className="fs-1 lh-1 fw-bold text-green">{name}</h5>
                <span className="text-white">
                  {species} - {gender}
                </span>
                <ul className="list-unstyled text-white mt-3">
                  <li>
                    <span className="text-gray">Type: </span>
                    {type ? type : "unknown"}
                  </li>
                  <li>
                    <span className="text-gray">Origin: </span>
                    {origin?.name}
                  </li>
                  <li>
                    <span className="text-gray">Last known location: </span>
                    {location?.name}
                  </li>
                  <li>
                    {(() => {
                      if (status === "Dead") {
                        return (
                          <div className="badge position-absolute bg-danger">
                            {status}
                          </div>
                        );
                      } else if (status === "Alive") {
                        return (
                          <div className="badge position-absolute bg-success">
                            {status}
                          </div>
                        );
                      } else {
                        return (
                          <div className="badge position-absolute bg-secondary">
                            {status}
                          </div>
                        );
                      }
                    })()}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetail;
