'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Curriculo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Curriculo.belongsTo(models.Candidato, {
        foreignKey: 'candidatoId',
        as: 'candidato',
      });
    }
  }
  Curriculo.init({
    curriculo_pdf: DataTypes.STRING,
    candidatoId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Curriculo',
  });
  return Curriculo;
};