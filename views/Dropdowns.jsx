const React = require('react');

module.exports = function Dropdowns({ }) {
    return (
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Categories
            </button>
            <ul className="dropdown-menu" id='list'>
              <li>
                <a className="dropdown-item" href="/" id="random">
                  Random
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/" id="Seafood">
                  Seafood
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/" id="Beef">
                Beef
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/" id="Dessert">
                Dessert
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/" id="Pasta">
                Pasta
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/" id="Vegan">
                Vegan
                </a>
              </li>
            </ul>
          </div>
    );
  };