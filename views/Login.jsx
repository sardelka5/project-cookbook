const React = require('react');
const Layout = require('./Layout');

module.exports = function Login() {
  return (
    <Layout>
      <div className="container login-container" style={{ width: '600px' }}>
        <h1 className="mt-5">Log in!</h1>
        <form method="post" action="/login" id="form-logo" className="mt-5">
          <div className="mb-3">
            <input
              type="email"
              name="email"
              autoFocus
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
          <div className="mb-3 text-danger" id="error"> </div>
          <button type="submit" className="btn btn-primary">
            Log in
          </button>
        </form>
      </div>
    </Layout>
  );
};
