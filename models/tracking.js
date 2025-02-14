'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tracking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Tracking.init({
    order_id: DataTypes.INTEGER,
    status: {
      type: DataTypes.ENUM('in_preparation', 'shipped', 'in_transit', 'out_for_delivery', 'delivered')
    },
    carrier: DataTypes.STRING,
    tracking_code: DataTypes.STRING,
    estimated_delivery: DataTypes.DATE,
    current_location: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Tracking',
  });
  return Tracking;
};