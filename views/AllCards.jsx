/* eslint-disable react/prop-types */
const React = require('react');
const Layout = require('./Layout');
const Table = require('./Table');
const Dropdowns = require('./Dropdowns');

module.exports = function AllCards({ arrayRecipes, authUser }) {
  return (
    <Layout authUser={authUser}>
    <Table arrayRecipes={arrayRecipes}></Table>
    <Dropdowns></Dropdowns>
    </Layout>
  );
};
