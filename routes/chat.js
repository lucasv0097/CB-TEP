const express = require('express');
const vcap = require('../util/vcapService');
const router = express.Router();
const watson = require('watson-developer-cloud');

router.get('/', (req,res) => {
  res.sendFile('views/chat.html', {root: __dirname.replace('/routes','')});
});

router.post('/mensagem', (req, res) => {
  let watson.Config = vcap.conversation[0].credentials;
  watsonConfig.version = 'v1';
  watsonConfig.version_date = '2017-12-12';

  const conversation = watson.conversation{watsonConfig};

  conversation.message({
    workspace_id : '0f7c2ea3-3b1e-4a31-ac7c-795859492e75';
    input: {'text':req.body.message},
    context: JSON.parse(req.body.context)
  }, function(err, response){
    if (err) {
      console.error(err);
      res.send(err);
    } else {
      res.send(response.output.text[0]);
    }
   });
  });
