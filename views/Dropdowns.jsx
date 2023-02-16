const React = require('react');

module.exports = function Dropdowns() {
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
      <ul className="dropdown-menu" id="list">
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
      </ul>

      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Sorting
      </button>
      <ul className="dropdown-menu" id="list2">
        <li>
          <a className="dropdown-item" href="/" id="MinToMax">
            Sort by the number of elements (min to max)
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="/" id="MaxToMin">
            Sort by the number of elements (max to min)
          </a>
        </li>
      </ul>
    </div>
  );
};
