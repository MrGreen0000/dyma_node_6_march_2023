const fs = require("fs");

fs.open("./fichiertest.txt", "a+", (err, fd) => {
  if (err) throw err;
  console.log(fd);
  fs.write(fd, "bonjour123", (err, written, str) => {
    console.log({ err, written, str });
    fs.close(fd, (err) => {
      if (err) throw err;
    });
  });
});
