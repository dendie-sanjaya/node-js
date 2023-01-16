module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define(
        "Order",
        {
            id: {
                type:DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
              },
              user_id: {
                type:DataTypes.STRING
              },
              order_date: {
                type:DataTypes.DATE
              },  
              createdAt: {
                type:DataTypes.DATE,
                allowNull: false
              },
              updatedAt: {
                type:DataTypes.DATE,
                allowNull: false
              }
        }, {
        tableName: "order",
    }
    );
    return Order;
}