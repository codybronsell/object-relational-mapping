const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Exhaust',
  },
  {
    category_name: 'Suspension',
  },
  {
    category_name: 'Intake Parts',
  },
  {
    category_name: 'Drivetrain',
  },
  {
    category_name: 'Engine',
  },
  {
    category_name: 'Brakes',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
