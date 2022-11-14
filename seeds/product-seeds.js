const { Product } = require('../models');

const productData = [
  {
    product_name: 'SR preformance cold air intake',
    price: 129.99,
    stock: 32,
    category_id: 1,
  },
  {
    product_name: 'eibach pro-kit lowering springs',
    price: 330.00,
    stock: 15,
    category_id: 2,
  },
  {
    product_name: 'mbrp street series cat back exhaust',
    price: 545.99,
    stock: 4,
    category_id: 1,
  },
  {
    product_name: 'brembo 6 piston kit',
    price: 1750.00,
    stock: 56,
    category_id: 4,
  },
  {
    product_name: 'airaid intake tube ',
    price: 199.99,
    stock: 37,
    category_id: 3,
  },
  {
    product_name: 'arp headstuds',
    price: 576.99,
    stock: 32,
    category_id: 5,
  },
  {
    product_name: 'lightweight driveshaft',
    price: 1500.00,
    stock: 42,
    category_id: 4,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
