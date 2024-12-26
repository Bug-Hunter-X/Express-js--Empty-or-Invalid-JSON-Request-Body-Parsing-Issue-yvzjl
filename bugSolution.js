const express = require('express');
const app = express();
app.use(express.json());

app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    console.error('Invalid JSON received:', err);
    return res.status(400).send({ error: 'Invalid JSON request body' });
  }
  next();
});

app.post('/users', (req, res) => {
  if (Object.keys(req.body).length === 0) {
    return res.status(400).send({ error: 'Empty request body' });
  }
  console.log(req.body);
  // ... other code to handle user creation ...
});

// ... other routes ...

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});