const { ProductTag } = require('../models');

const productTagData = [
  {
    product_id: 1,
    tag_id: 7,
  },
  {
    product_id: 2,
    tag_id: 4,
  },
  {
    product_id: 3,
    tag_id: 1,
  },
  {
    product_id: 5,
    tag_id: 8,
  },
  {
    product_id: 6,
    tag_id: 11,
  },
];

const seedProductTags = () => ProductTag.bulkCreate(productTagData);

module.exports = seedProductTags;
