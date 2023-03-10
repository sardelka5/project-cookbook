const React = require('react');
const Layout = require('./Layout');

module.exports = function Registration() {
  return (
    <Layout>
      <div className="container rego-container" style={{ width: '600px' }}>
        <h1 className="mt-5">Sign up!</h1>
        <form
          method="post"
          action="/registration"
          id="form-rego"
          className="mt-5"
        >
          <div className="mb-3">
            <input
              type="text"
              name="name"
              autoFocus
              placeholder="Name"
              className="form-control"
            />
          </div>
          <div className="mb-3">
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
              name="passwordOne"
              placeholder="Password"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              name="passwordTwo"
              placeholder="Repeat password"
              className="form-control"
            />
          </div>
          <div className="mb-3 text-danger" id="error"> </div>
          <button type="submit" className="btn btn-primary">
            Sign up
          </button>
        </form>
      </div>
    </Layout>
  );
};
