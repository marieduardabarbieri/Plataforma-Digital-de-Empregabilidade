'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Candidato extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Candidato.hasOne(models.Curriculo, {
        foreignKey: 'candidatoId',
        as: 'curriculo',
      });

      Candidato.hasMany(models.Candidatura, {
        foreignKey: 'candidatoId',
        as: 'candidaturas',
      });
    }
  }
  Candidato.init({
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    senha: DataTypes.STRING,
    perfil: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Candidato',
  });
  return Candidato;
};