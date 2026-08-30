'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Empresa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Empresa.hasMany(models.Vaga, {
        foreignKey: 'empresaId',
        as: 'vagas',
      });
    }
  }
  Empresa.init({
    nome_empresa: DataTypes.STRING,
    cnpj: DataTypes.STRING,
    email: DataTypes.STRING,
    telefone: DataTypes.STRING,
    area_atuacao: DataTypes.STRING,
    perfil: DataTypes.STRING,
    cidade: DataTypes.STRING,
    uf: DataTypes.STRING,
    localizacao: DataTypes.STRING,
    descricao: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Empresa',
  });
  return Empresa;
};