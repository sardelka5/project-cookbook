/* eslint-disable react/prop-types */
const React = require('react');
const Layout = require('./Layout');
const Table = require('./Table');

module.exports = function Favorites({ arrayRecipes, authUser, category }) {
  return (
    <Layout authUser={authUser}>
      <Table arrayRecipes={arrayRecipes} category="Favorite dishes" />
    </Layout>
  );
};
