var koneksi = require('../koneksi');
const Sequelize = require('sequelize');
const infoModel = koneksi.define('info',
{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    judul: {
        type: Sequelize.STRING,
    },
    konten: {
        type: Sequelize.TEXT,
    },
    gambar: {
        type: Sequelize.STRING,
    },
},
{
    freezeTableName: true
}
);

module.exports=infoModel;