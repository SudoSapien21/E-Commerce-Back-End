// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belong to Category
Product.belongsTo(Category, {
  foreignKey: 'category_id', // This is the foreign key in the Product model
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id', // This matches the foreign key in the Product model
  onDelete: 'CASCADE', // Optional: Define the behavior on category deletion
});

// Products belong to many Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id', // This is the foreign key in the ProductTag model
});

// Tags belong to many Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id', // This is the foreign key in the ProductTag model
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
