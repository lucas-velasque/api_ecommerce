'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Order.init({
    user_id: DataTypes.INTEGER,
    address_id: DataTypes.INTEGER,
    status: {
      type: DataTypes.ENUM('pending', 'processing', 'shipped', 'delivered', 'cancelled'),

    },
    total_amount: DataTypes.DECIMAL(10, 2)
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};