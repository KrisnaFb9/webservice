var koneksi = require("../koneksi");
const Sequelize = require("sequelize");
const aboutModel = koneksi.define(
  "about",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    judul: {
      type: Sequelize.STRING,
    },
    gambar: {
      type: Sequelize.STRING,
    },
    konten: {
      type: Sequelize.STRING,
    },
  },
  { freezeTableName: true }
);
module.exports = aboutModel;
