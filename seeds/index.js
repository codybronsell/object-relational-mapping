const seedCategories = require('./category-seeds');
const seedProducts = require('./product-seeds');
const seedTags = require('./tag-seeds');
const seedProductTags = require('./product-tag-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- STREET RACING DATABASE SYNCED -----\n');
  await seedCategories();
  console.log('\n----- RACING CATEGORIES SEEDED -----\n');

  await seedProducts();
  console.log('\n----- RACING PRODUCTS SEEDED -----\n');

  await seedTags();
  console.log('\n----- RACING TAGS SEEDED -----\n');

  await seedProductTags();
  console.log('\n----- RACING PRODUCT TAGS SEEDED -----\n');

  process.exit(0);
};

seedAll();
