const mongoose = require('mongoose');

//conectanto com mongodb
mongoose.connect('mongodb://localhost/noderest', { 
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true
});

mongoose.Promise = global.Promise;

module.exports = mongoose;