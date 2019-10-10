const express = require('express');
const chalk = require('chalk');

const app = express();

app.get('/', (req, res) => res.send('API Running'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(chalk.green.inverse(`Server started on port: ${PORT}`));
});
