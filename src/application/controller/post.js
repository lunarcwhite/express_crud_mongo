const Post = require('../../model/posts');

async function getPosts(req, res) {
  const data = await Post.find({});
  res.send(data);
}

async function getOnePost(req, res) {
  const id = req.params.id;
  const data = await Post.findById(id);
  res.send(data);
}

async function addPosts(req, res) {
  const postData = {
    title: req.body.title,
    body: req.body.body,
  };
  const post = new Post(postData);
  const response = await post.save();
  res.send(response);
}


async function updateOne(req, res){
  const id = req.params.id;
  const postData = {
    title: req.body.title,
    body: req.body.body,
  };
  const response = await Post.findByIdAndUpdate(id, postData);
  res.send(response);
}
async function deleteOne(req, res){
  const id = req.params.id;
  const response = await Post.findByIdAndDelete(id);
  res.send(response);
}
module.exports = {
  getPosts,
  getOnePost,
  addPosts,
  updateOne,
  deleteOne,
};
