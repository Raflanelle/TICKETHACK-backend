const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://ramy:azerty@cluster0.a3oremg.mongodb.net/weatherapp';

mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log('Database connected'))
  .catch(error => console.error(error));