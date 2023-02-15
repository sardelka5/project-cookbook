/* eslint-disable react/prop-types */
const React = require('react');
const Layout = require('./Layout');

module.exports = function Home({ children }) {
  return <Layout>{children}</Layout>;
};
