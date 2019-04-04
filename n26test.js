const fs = require('fs');

module.exports = function (path, data) {
  console.log("data", data.length);
    console.log("in write to file");
    fs.writeFile(path, JSON.stringify(data, null,4), (err) => {
      if (err) throw err;
      console.log(path, 'saved!');
    })
  }