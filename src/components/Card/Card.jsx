import "./Card.css";
import { Link } from "react-router-dom";

const Card = ({ page, results }) => {
  let display;

  if (results) {
    display = results.map((data) => {
      let { id, name, gender, image, location, species, status } = data;
      return (
        <Link
          to={`${page}${id}`}
          key={id}
          style={{ textDecoration: "none" }}
          className="col-xl-6 mb-4 position-relative"
        >
          <div className="card shadow-sm rounded">
            <div className="row">
              <div className="col-md-5">
                <img
                  className="d-block w-100 img-fluid rounded-start rounded-top-md"
                  src={image}
                  alt={name}
                />
              </div>
              <div className="col-md-7">
                <div className="card-block p-3 p-lg-2">
                  <div className="mt-2">
                    <h5 className="fs-3 fw-bold text-green lh-1">{name}</h5>
                    <p className="text-white lh-1">
                      {species} - {gender}
                    </p>
                  </div>
                  <div>
                    <span className="text-gray small">
                      Last known location:
                    </span>
                    <p className="text-white">{location.name}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
        </Link>
      );
    });
  } else {
    display = <h3 className="text-center mb-5">No data found :/</h3>;
  }

  return <>{display}</>;
};

export default Card;
