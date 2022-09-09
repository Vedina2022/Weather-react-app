import React from "react";
import "./Search.css";
import "bootstrap/dist/css/bootstrap.css";

export default function Search() {
  return (
    <div className="search">
      <form className="search-form">
        <div className="row">
          <div className="col-8">
            <input
              type="text"
              placeholder="Search for location..."
              className="form-control search-input"
              autoComplete="off"
            />
          </div>
          <div className="col-2">
            <button type="submit">Search</button>
          </div>
          <div className="col-2">
            <button className="btn btn-succes">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-geo-alt-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
              </svg>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
