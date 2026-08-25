'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Candidatura extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Candidatura.belongsTo(models.Vaga, {
        foreignKey: 'vagaId',
        as: 'vaga',
      });

      Candidatura.belongsTo(models.Candidato, {
        foreignKey: 'candidatoId',
        as: 'candidato',
      });
    }
  }
  Candidatura.init({
    vagaId: DataTypes.INTEGER,
    candidatoId: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Candidatura',
  });
  return Candidatura;
};