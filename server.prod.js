const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const config = {
  project_root: 'public',
  index_html: 'index.html',
}

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  return res.sendFile(`${__dirname}/${config.project_root}/${config.index_html}`);
});

app.listen(port, function () {
  console.log('server is running on http://localhost:' + port);
});