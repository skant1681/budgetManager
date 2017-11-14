"use strict";

module.exports = function(sequelize, DataTypes) {
    var Transations = sequelize.define("Transations", {
        description: DataTypes.STRING,
        sourceId: DataTypes.STRING,
        type:DataTypes.STRING,
        amount: {type: DataTypes.INTEGER},
        userId:{type:DataTypes.STRING},
        meta:DataTypes.TEXT
    }, {
        tableName:"Transations",
        classMethods: {
            associate: function(models) {

            }
        }
    });

    return Transations;
};
