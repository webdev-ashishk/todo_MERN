const mongoose = require('mongoose');
const TodoSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
});

const TodoModel = mongoose.model('TodoModel', TodoSchema);

module.exports = TodoModel;
