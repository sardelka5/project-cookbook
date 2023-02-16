/* eslint-disable react/prop-types */
const React = require('react');
const Layout = require('./Layout');
const Table = require('./Table');

module.exports = function Favorites({ arrayRecipes, authUser }) {
  return (
    <Layout authUser={authUser}>
      <Table arrayRecipes={arrayRecipes} />
    </Layout>
  );
};
