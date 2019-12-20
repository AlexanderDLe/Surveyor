const express = require('express');
const app = express();
const connectDB = require('./config/db');
connectDB();
require('./models/User');
require('./services/passport');
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
