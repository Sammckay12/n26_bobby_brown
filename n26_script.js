const dotenv = require('dotenv');
dotenv.config();

const fs = require('fs');
const N26 = require('n26');

function getTransactions() {
  const myAccount = new N26(process.env.n26_user, process.env.n26_pass)
  .then(account => account.transactions())
  .then(transactions => {
    writeToFile('./transactions.json', transactions)
  });
}

 function writeToFile(path, data) {
  console.log("data", data.length);
    console.log("in write to file");
    fs.writeFile(path, JSON.stringify(data, null,4), (err) => {
      if (err) throw err;
      console.log(path, 'saved!');
    })
  }

  getTransactions()
