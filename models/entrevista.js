'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Entrevista extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Entrevista.belongsTo(models.Candidatura, {
        foreignKey: 'candidatura_id',
        as: 'candidatura'
      });
    }
  }
  Entrevista.init({
    candidatura_id: DataTypes.INTEGER,
    data: DataTypes.DATEONLY,
    horario: DataTypes.STRING,
    tipo: DataTypes.STRING,
    endereco: DataTypes.STRING,
    link: DataTypes.STRING,
    observacoes: DataTypes.TEXT,
    status_entrevista: DataTypes.STRING,
    resultado: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Entrevista',
  });
  return Entrevista;
};