/* eslint-disable react/prop-types */
const React = require('react');
const Layout = require('./Layout');
const Table = require('./Table');

module.exports = function Favorites({
  arrayRecipes,
  authUser,
  category,
  likes,
}) {
  return (
    <Layout authUser={authUser}>
      <div className="container" id="main">
        <Table
          arrayRecipes={arrayRecipes}
          category="Favorite dishes"
          likes={likes}
        />
      </div>
    </Layout>
  );
};
