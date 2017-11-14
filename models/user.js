"use strict";

module.exports = function(sequelize, DataTypes) {
    var Users = sequelize.define("Users", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
            unique: true
        },
        name: DataTypes.STRING,
        userName: {type: DataTypes.STRING,unique:true},
        email:{type:DataTypes.STRING,unique:true},
        phoneNumber:{type:DataTypes.STRING({length:15}),unique:true},
        isVerified:{type:DataTypes.BOOLEAN,defaultValue:false},
        password:DataTypes.STRING
    }, {
        tableName:"Users",
        classMethods: {
            associate: function(models) {

            }
        }
    });

    return Users;
};
