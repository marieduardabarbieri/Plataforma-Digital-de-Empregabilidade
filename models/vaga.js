'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vaga extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Vaga.belongsTo(models.Empresa, {
        foreignKey: 'empresaId',
        as: 'empresa',
      });

      Vaga.hasMany(models.Candidatura, {
        foreignKey: 'vagaId',
        as: 'candidaturas',
      });
    }
  }
  Vaga.init({
    titulo_vaga: DataTypes.STRING,
    empresaId: DataTypes.INTEGER,
    quantidade_vagas: DataTypes.INTEGER,
    salario: DataTypes.FLOAT,
    regime_contrato: DataTypes.STRING,
    tipo_trabalho: DataTypes.STRING,
    localizacao: DataTypes.STRING,
    descricao_vaga: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Vaga',
  });
  return Vaga;
};