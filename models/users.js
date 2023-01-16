module.exports = (sequelize, DataTypes) => {

    const Users = sequelize.define(

        "Users",

        {

            id: {

                type: DataTypes.INTEGER,

                primaryKey: true,

                autoIncrement: true,

                allowNull: false

            },

            name: {

                type: DataTypes.STRING

            },

            email: {

                type: DataTypes.STRING

            },

            password: {

                type: DataTypes.STRING

            },

            refresh_token: {

                type: DataTypes.STRING

            },

            createdAt: {

                type: DataTypes.DATE,

                allowNull: false

            },

            updatedAt: {

                type: DataTypes.DATE,

                allowNull: false

            }

        }, {

        tableName: "users",

    }

    );

    return Users;

}