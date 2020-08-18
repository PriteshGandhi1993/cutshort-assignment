const express = require('express');

const app = express();

app.use(express.static('./dist/cutshort-assignment'));

app.get('/*', function(req, res) {
  res.sendFile('index.html', {root: 'dist/cutshort-assignment/'}
);
});

app.listen(process.env.PORT || 4200);
