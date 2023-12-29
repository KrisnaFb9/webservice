const {
    Sequelize
} = require('sequelize');

const koneksi = new Sequelize('sidb', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
});

try {
    koneksi.authenticate();
    koneksi.sync({
        alter: true
    });
    console.log('Berhasil konek database');
} catch (error) {
    console.error('Gagal konek database:', error);
}

module.exports = koneksi;