const express = require('express');
const app = express();
app.use(express.json());
app.post('/users', (req, res) => {
  console.log(req.body);
  // ... other code to handle user creation ...
});

// ... other routes ...

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});