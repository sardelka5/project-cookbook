/* eslint-disable react/prop-types */
const React = require('react');
const Layout = require('./Layout');

module.exports = function Home({ children }) {
  return (
    <Layout>
      <div className="container home-container">
        <div>
          <a href="/home">Home</a>
          <br />
          <a href="/registration">Sign in</a>
          <br />
          <a href="/login">Log in</a>
        </div>
        {children}
      </div>
    </Layout>
  );
};
