var dotenv = require('dotenv');
var express = require('express');
var logger = require('./helper/logger');
var requestLogger = require('./helper/requestLogger');
var apiAuth = require('./helper/apiAuthentication');
var cors = require('cors');

dotenv.config();

var usersRouter = require('./routes/userRouter');
var gorupRouter = require('./routes/groupRouter');
var expenseRouter = require('./routes/expenseRouter');

var app = express();

// ✅ CORS setup for Vercel frontend
const corsOptions = {
  origin: ['https://split-share-ten.vercel.app'],
  credentials: true,
};
app.use(cors(corsOptions));

app.use(express.json());
app.use(requestLogger);

app.use('/api/users', usersRouter);
app.use('/api/group', apiAuth.validateToken, gorupRouter);
app.use('/api/expense', apiAuth.validateToken, expenseRouter);

// ❌ Removed serving frontend build (not needed)
app.all('*', (req, res) => {
  logger.error(`[Invalid Route] ${req.originalUrl}`);
  res.status(404).json({
    status: 'fail',
    message: 'Invalid path',
  });
});

const port = process.env.PORT || 3001;
app.listen(port, (err) => {
  console.log(`Server started on PORT | ${port}`);
  logger.info(`Server started on PORT | ${port}`);
});
