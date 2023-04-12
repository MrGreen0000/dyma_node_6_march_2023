const fs = require("fs");

fs.readFile("./fichiertest.txt", (err, data) => {
  if (err) throw err;
  console.log(data);
});
