const express = require('express');
const app = express.Router();

const postCtrl = require('../controller/post');
const mhsCtrl = require('../controller/mahasiswa');
const mKCtrl = require('../controller/mataKuliah');
const auth = require('../middleware/auth');


app.get('/', function (req, res) {
  res.send({ message: 'hello dari route v1' });
});

//post
app.get('/posts', postCtrl.getPosts);
app.get('/posts/:id', postCtrl.getOnePost);
app.post('/posts', postCtrl.addPosts);
app.put('/posts/:id', postCtrl.updateOne);
app.delete('/posts/:id', postCtrl.deleteOne);

//mahasiswa
app.get('/mahasiswa', mhsCtrl.getMhs);
app.get('/mahasiswa/:id', mhsCtrl.getOneMhs);
app.post('/mahasiswa', mhsCtrl.addMhs);
app.put('/mahasiswa/:id', mhsCtrl.updateOne);
app.delete('/mahasiswa/:id', mhsCtrl.deleteOne);

//mata_kuliah
app.get('/mata_kuliah', mKCtrl.getMk);
app.get('/mata_kuliah/:id', mKCtrl.getOneMk);
app.post('/mata_kuliah', mKCtrl.addMk);
app.put('/mata_kuliah/:id', mKCtrl.updateOne);
app.delete('/mata_kuliah/:id', mKCtrl.deleteOne);
module.exports = app;
