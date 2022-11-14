const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'Cat-Back Exhaust',
  },
  {
    tag_name: 'X-Pipe Exhaust',
  },
  {
    tag_name: 'Headers',
  },
  {
    tag_name: 'Lowering Springs',
  },
  {
    tag_name: 'Coil Over Kits',
  },
  {
    tag_name: 'Ball Joint and Bumpsteer Kits',
  },
  {
    tag_name: 'Cold Air Intake Kits',
  },
  {
    tag_name: 'Cold Air Intake & Tuner Kits',
  },
  {
    tag_name: 'Supercharger Kits',
  },
  {
    tag_name: 'Underdrive Pulleys',
  },
  {
    tag_name: 'Throttle Bodies',
  },
  {
    tag_name: 'Fuel Delivery',
  },
  {
    tag_name: 'Tuner Kits',
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
