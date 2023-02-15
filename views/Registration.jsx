const React = require('react');
const Layout = require('./Layout');

module.exports = function Registration() {
  return (
    <Layout>
      <div className="container rego-container">
        <h1 className="mt-5">Sign in!</h1>
        <form
          method="post"
          action="/registration"
          id="form-rego"
          className="mt-5"
        >
          <div className="mb-3">
            <div className="mb-3">
              <input
                type="text"
                name="name"
                autoFocus
                placeholder="Name"
                className="form-control"
              />
            </div>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Email"
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Sign in
          </button>
        </form>
      </div>
    </Layout>
  );
};
