const { contacts } = require('../data/contacts.js')
const counter = contacts.length;

const list = (req, res) => {
   return res.json(contacts)
}

const show = (req, res) => {
    const obs = parseInt(req.params.id - 1)
    res.json(contacts[obs])
}

const create = (req, res) => {
    const newContact =   {
        "_id": req.body._id,
        "name": req.body.name,
        "occupation": req.body.occupation,
        "avatar": "https://upload.wikimedia.org/wikipedia/en/5/50/Agentdalecooper.jpg"
      }

      if(!newContact.name){
        return res.status(400).json({msg: 'Please enter name.'})
      }
      
      contacts.push(newContact);
      res.json(contacts);
      console.log(req.body)
}

const update = (req, res) => {
    const update = contacts[req.params.id - 1]
    contacts[req.params.id - 1] = update
    res.send(contacts[req.params.id - 1])
}

module.exports = { list, show, create, update }