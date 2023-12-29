var koneksi = require("../koneksi");
const Sequelize = require("sequelize");
const mahasiswaModel = koneksi.define(
  "dokumen",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    judul: {
      type: Sequelize.STRING,
    },
    konten: {
      type: Sequelize.STRING,
    },
  },
  { freezeTableName: true }
);
module.exports = mahasiswaModel;
