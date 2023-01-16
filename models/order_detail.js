module.exports = (sequelize, DataTypes) => {
    const OrderDetail = sequelize.define(
        "OrderDetail",
        {
            id: {
                type:DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,    
              },
              order_id: {
                type:DataTypes.INTEGER
              },
              qty: {
                type:DataTypes.INTEGER
              },
              price: {
                type:DataTypes.INTEGER
              }, 
              product_name:{
                type:DataTypes.STRING
              },
              product_id:{
                type:DataTypes.INTEGER
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
        tableName: "order_detail",
    }
    );
    return OrderDetail;
}