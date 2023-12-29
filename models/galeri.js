var koneksi = require("../koneksi");
const Sequelize = require("sequelize");
const galeriModel = koneksi.define(
  "galeri",
  {
    id: {
      type: Sequelize.STRING,
      primaryKey: true,
    },
    gambar: {
      type: Sequelize.STRING,
    },
    judul: {
      type: Sequelize.STRING,
    },
  },
  { freezeTableName: true }
);
module.exports = galeriModel;
