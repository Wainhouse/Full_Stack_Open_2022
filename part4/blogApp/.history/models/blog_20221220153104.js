const mongoose = require('mongoose');

let blogSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  author: {
    type: String,
  },
  url: {
    type: String,
  },
  likes: {
    type: Number,
  },
});

module.exports = mongoose.model('Blog', blogSchema);

// blogSchema.set('toJSON', {
//   transform: (document, returnedObject) => {
//     returnedObject.id = returnedObject._id.toString();
//     delete returnedObject._id;
//     delete returnedObject.__v;
//   },
// });
