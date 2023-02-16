const React = require('react');

module.exports = function Layout({ title, children, authUser }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/style.css" />
        <script defer src="/js/bootstrap.bundle.min.js" />
        <script defer src="/js/application.js" />
        <script defer src="/js/applicationForOneCard.js" />
        <script defer src="/js/applicationForLikesFav.js" />
        <title>{title}</title>
      </head>
      <body>
        <div className="collapse" id="navbarToggleExternalContent">
          {authUser ? (
            <div className="bg-dark p-4">
              <h5 className="text-white h3">Hello, {`${authUser.name}`}</h5>
              <h5 className="text-white h4">
                <a href="/home">Home</a>
              </h5>
              <h5 className="text-white h5">
                <a href="/favorites">Favorites</a>
              </h5>
              <h5 className="text-white h5">
                <a href="/logout">Log out</a>
              </h5>
            </div>
          ) : (
            <div className="bg-dark p-4">
              <h5 className="text-white h4">
                <a href="/home">Home</a>
              </h5>
              <h5 className="text-white h5">
                <a href="/registration">Sign up</a>
              </h5>
              <h5 className="text-white h5">
                <a href="/login">Log in</a>
              </h5>
            </div>
          )}
        </div>
        <nav className="navbar navbar-dark bg-dark">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarToggleExternalContent"
              aria-controls="navbarToggleExternalContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
};
