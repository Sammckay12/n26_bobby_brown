
const express = require('express')
const app = express();

// const n26_accounts = require('./n26test.js')

const N26 = require('n26');



app.get('/', (req, res) => {
  const myAccount = new N26('username@mail.com', 'password')
  console.log(myAccount)

  .then(account => account.transactions({text: 'Lafayette'}))
  .then(transactions => {
    console.log(transactions)
  });
  res.send('Hello World!')
});

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});