"use strict";

module.exports = function(sequelize, DataTypes) {
    var Source = sequelize.define("Source", {
        name: DataTypes.STRING,
        type: DataTypes.STRING,
        meta:DataTypes.TEXT
    }, {
        tableName:"Source",
        classMethods: {
            associate: function(models) {

            }
        }
    });

    return Source;
};
