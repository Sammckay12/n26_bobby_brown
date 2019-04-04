
const express = require('express')
const app = express();

// import { writeToFile } from './n26test.js'
const writeToFile = require('./n26test.js')

const N26 = require('n26');



app.get('/', (req, res) => {
  const myAccount = new N26('robholdenflag@gmail.com', '7v6GpL7ip8fjwUax2Q')
  .then(account => account.transactions())
  .then(transactions => {
    writeToFile('./transactions.json', transactions)
  });
  res.send('Hello World!')
});

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});