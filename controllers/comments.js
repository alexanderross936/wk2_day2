const { comments } = require('../data/comments.js')
const counter = comments.length;

const list = (req, res) => {
   return res.json(comments)
}

const show = (req, res) => {
    const obs = parseInt(req.params.id - 1)
    res.json(comments[obs])
}

const create = (req, res) => {
    const newComment =   {
        "_id": req.body.id,
        "body": req.body.body,
        "postId": req.body.postId
      }

      if(!newComment.name){
        return res.status(400).json({msg: 'Please enter name.'})
      }
      
      vehicles.push(newComment);
      res.json(comments);
      console.log(req.body)
}

const update = (req, res) => {
    const update = comments[req.params.id - 1]
    comments[req.params.id - 1] = update
    res.send(comments[req.params.id - 1])
}

module.exports = { list, show, create, update }