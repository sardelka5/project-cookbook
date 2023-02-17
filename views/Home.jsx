/* eslint-disable react/prop-types */
const React = require('react');
const Layout = require('./Layout');

module.exports = function Home({ children, authUser }) {
  return <Layout authUser={authUser}>{children}</Layout>;
};
