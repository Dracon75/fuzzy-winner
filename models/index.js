// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: "productKey",
  //onDelete: "CASCADE",
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: "categoryKey",
  //onDelete: "CASCADE",
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  foreignKey: "productsHaveManyTags",
  through: {
    model: "product_tag",
  },
  as: "current_searchtag",
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  foreignKey: "tagsHaveManyProducts",
  through: {
    model: "product_tag",
  },
  as: "current_producttag",
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
