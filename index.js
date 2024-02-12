const express = require('express');
const path = require('path');
const mime = require('mime-types');
const gradule = require('./src/Gradule-web');

const app = express();

// Use dist & shout folders
app.use(express.static(path.join(__dirname, 'dist')));

const mimeware = (req, res, next) => {
  const ext = path.extname(req.url);
  const type = mime.lookup(ext);
  res.setHeader('Content-Type', type);
  next?.();
};

app.use(mimeware);

app.get('/', (req, res) => {
  mimeware(req, res)
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('*/:file', (req, res) => {
  mimeware(req, res)
  res.sendFile(__dirname + req.url);
});

app.listen(3000, () => {
  gradule.print(
    'Server started on port 3000',
    [...gradule.preset.cherryblossoms, ...gradule.preset.amethyst],
  )
});
