const fs = require("fs");

fs.mkdir("./mondossier", (err) => {
  if (err) throw err;
  console.log("Le dossier à été créé !");
});
