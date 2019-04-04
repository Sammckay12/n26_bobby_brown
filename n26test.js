const N26 = require('n26');

const myAccount = new N26('username@mail.com', 'password')
  .then(account => account.transactions({text: 'Lafayette'}))
  .then(transactions => {
    console.log(transactions)
  });