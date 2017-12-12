const express = require('express')
const path = require('path');
const app = express()
const chatRouter = require('..router/chat')
const bodyParser = require('body-parser')

const serverPort = process.env.PORT || 3000
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use('/chat', chatRouter)
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port %d!', serverPort);
});


//request watson
/*app.get('/mensagem', (req,res) => {
  var watson = require("watson-developer-cloud");

  var conversation = new watson.ConversationV1({
  username: '6ea43dc9-1c9c-4050-b403-836059dfb5c5',
  password: '4MJLc8hMXAgI',
  version_date: '2017-05-26'
  });

  var context = {};

conversation.message({
  workspace_id:'0f7c2ea3-3b1e-4a31-ac7c-795859492e75',
  input:{'text':req.query.texto},
  context: context
}, function(err, response) {
  if (err) {
    console.error(err);
    res.send(err);
  } else {
    res.send(response.output.text[0]);
  }
 });
});*/
