require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// ✅ CREATE app FIRST
const app = express();

// ✅ MIDDLEWARE AFTER app IS CREATED
app.use(cors());
app.use(express.json());

// ✅ MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });

// ✅ Routes
app.use('/api/auth', require('./routes/auth'));

// ✅ Test route
app.get('/', (req, res) => {
  res.send('Backend running');
});

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});


