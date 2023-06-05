const express = require('express');
const multer = require('multer');
const path = require('path');
const uploadCtrl = require('../controller/upload.v2');

const app = express.Router();
const upload = multer({ dest: path.resolve('./tmp') });

app.use(
  '/uploads',
  express.static(path.resolve(`public/images`))
);

app.post('/upload-gambar', upload.single('image'), uploadCtrl.uploadGambar);

module.exports = app;
