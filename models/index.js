// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category (one-to-one)
Product.belongsTo(Category, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
})
// Categories have many Products (one-to-many)
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
})
// Products belongToMany Tags (through ProductTag) (many-to-many)
Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    unique: false
  }
})
// Tags belongToMany Products (through ProductTag) (many-to-many)
Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
    unique: false
  }
})
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
