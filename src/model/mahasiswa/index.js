const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    nama: String,
    nim: String,
    kelas: String,
    jenisKelamin: String,
});

module.exports = mongoose.model('mahasiswas', schema)